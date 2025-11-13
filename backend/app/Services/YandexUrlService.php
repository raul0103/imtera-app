<?php

namespace App\Services;

use App\Http\Requests\YandexUrlRequest;
use Illuminate\Support\Facades\Auth;

class YandexUrlService
{
    public function updateOrCreate(YandexUrlRequest $request)
    {
        $user = Auth::user();

        // Создаем или обновляем URL
        $yandexUrl = $user->yandexUrl()->updateOrCreate(
            ['user_id' => $user->id],
            ['url' => $request->url]
        );

        return response()->json([
            'message' => 'Yandex URL успешно создан/обновлен',
            'data' => $yandexUrl
        ]);
    }
}
