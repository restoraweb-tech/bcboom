<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\Referral;
use Notification;
use App\Notifications\ReferralBonus;
use Illuminate\Support\Str;
use Validator;
use JWTAuth;
use App\Models\Wallet;
use Tymon\JWTAuth\Exceptions\JWTException;

class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct() {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }
    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */

     public function showRegistrationForm(Request $request)
{
    if ($request->has('ref')) {
        session(['referrer' => $request->query('ref')]);
    }

    return redirect()->route('open')->with('ref', $request->query('ref'));
}

    public function login(Request $request){
    	$validator = Validator::make($request->all(), [
            'email' => 'required',
            'password' => 'required|string|min:6',
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }
        if (! $token = auth()->attempt($validator->validated())) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        // if(is_numeric($request->get('email'))){
        //     return ['phone'=>$request->get('email'),'password'=>$request->get('password')];
        //   }
        //   elseif (filter_var($request->get('email'), FILTER_VALIDATE_EMAIL)) {
        //     return ['email' => $request->get('email'), 'password'=>$request->get('password')];
        //   }
        //   return ['username' => $request->get('email'), 'password'=>$request->get('password')];


        if(is_numeric($request->email)){
            $phone = User::where('phone', $request->email)->first();
            if($phone !== NULL){
                $email = $phone->email;
                
        return $this->createNewToken($token);
            }
        }

        return $this->createNewToken($token);
    }
    /**
     * Register a User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(Request $request) {
        
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email|max:100|unique:users',
            'password' => 'required|string|min:6',
            'username' => 'required|string|max:255|unique:users|regex:/^\S*$/u'
        ]);
        if($validator->fails()){
            return response()->json($validator->errors()->toJson(), 400);
        }else{
            $referrer = User::whereUsername(session()->pull('referrer'))->first();

            $user = User::create(array_merge(
                $validator->validated(),
                [
                    'password' => bcrypt($request->password),
                    'referrer_id' => $referrer ? $referrer->id : null
                    ]
                ));
                
                // Just creating a token for the user referral token
                
                $tokenize = rand(111111, 777777);
                $user->update([
                    'referral_token' => strtolower($user->username) . $tokenize,
                ]);

                if($request->has('phone')){
                    $user->update([
                        'phone' => $request->get('phone')
                    ]);
                }

                Wallet::create([
                    'user_id' => $user->id,
                ]);
                
                
                if($referrer){
                    // Grant a bonus to the referrer.
                    $referrer->update([
                        'referral_count' => $referrer->referral_count+1
                    ]);
                    $referrer->grantBonus();
                    // $referrer->makeVip();
                }

                // This works only if the request has field 'ref'

                if($request->has('ref')){
                    $referring = User::where('referral_token', $request->ref)->first();

                    if($referring){
                        
                        $referring->update([
                            'referral_count' => $referring->referral_count+1
                        ]);

                    $user->update([
                        'referrer_id' => $referring->id
                    ]);

                    // Grant a bonus to the referring user.
                    $referring->grantBonus();
                    // $referring->makeVip();
                }else{
                    // $token = JWTAuth::fromUser($user);

                    return response()->json([
                        'message' => 'User successfully registered',
                        'user' => $user
                    ], 201);
                }
                

                }
                
 
                // $token = JWTAuth::fromUser($user);

        return response()->json([
            'message' => 'User successfully registered',
            'user' => $user
        ], 201);
    }
    }
    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout() {
        auth()->logout();
        return response()->json(['message' => 'User successfully signed out']);
    }
    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh() {
        return $this->createNewToken(auth()->refresh());
    }
    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function userProfile() {
        return response()->json(auth()->user());
    }
    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function createNewToken($token){
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
            'user' => auth()->user()
        ]);
    }    //
}
