<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    use HasFactory;
    protected $table = 'payments';

    protected $fillable = [
        "amount",
        "pay_amount",
        "order_no",
        "create_time",
        "link",
        'called',
        "customer",
        "email",
        "mobile",
        "approved",
        "rejected",
       "pay_info",
        "tx_order_no",
        "trade_state",
        "sign",
        "pay_type",
        "status",
        'deposit_amount',
        'percentage_amount', 
        'final_amount',
        "remark",
        "pay_time",
        "user_id",
        "sign",
        "percentage_amount"
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }
}
