<?php

namespace App\Http\Controllers;

use App\Http\Requests\YandexUrlRequest;
use App\Services\YandexUrlService;

class YandexUrlController extends Controller
{
    public function __construct(public YandexUrlService $yandexUrlService) {}

    public function updateOrCreate(YandexUrlRequest $request)
    {
        return $this->yandexUrlService->updateOrCreate($request);
    }
}
