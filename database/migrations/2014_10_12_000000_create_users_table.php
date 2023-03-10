<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            Schema::dropIfExists('users');
            $table->id();
            $table->string('name')->nullable();
            $table->string('email')->unique();
            $table->string('username')->unique();
            $table->string('phone')->nullable()->unique();
            $table->text('bio')->nullable();
            $table->bigInteger('withdrawal_limit')->default(1000);
            $table->unsignedBigInteger('referrer_id')->nullable();
            $table->foreign('referrer_id')->references('id')->on('users');
            $table->bigInteger('referral_count')->default(0);
            $table->string('referral_token')->unique()->nullable();
            $table->string('address')->nullable();
            $table->string('image')->nullable();
            $table->boolean('admin')->default(0);
            $table->boolean('player')->default(1);
            $table->string('vip')->default(0);
            $table->timestamp('email_verified_at')->nullable();
            $table->string('status')->default('active');
            $table->string('password');
            $table->string('eligibility')->default('new_user');
            $table->boolean('new_user')->default(1);
            $table->boolean('first_100_deposit_bonus')->default(0);
            $table->boolean('first_withdrawal_bonus')->default(0);
            $table->boolean('other_withdrawal_bonus')->default(0);
            $table->boolean('second_100_deposit_bonus')->default(0);
            $table->boolean('third_50_deposit_bonus')->default(0);
            $table->boolean('fourth_30_deposit_bonus')->default(0);
            $table->boolean('fifth_20_deposit_bonus')->default(0);
            $table->boolean('other_bonus')->default(0);      
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
};