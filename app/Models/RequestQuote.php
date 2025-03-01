<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RequestQuote extends Model
{
    use HasFactory;

    // Allow mass assignment for these fields
    protected $fillable = [
        'topic',
        'product',
        'first_name',
        'last_name',
        'email',
        'message',
        'status'
    ];
}
