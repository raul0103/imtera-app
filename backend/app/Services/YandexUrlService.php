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

    public function getUserYandexUrl()
    {
        $user = Auth::user();

        $yandexUrl = $user->yandexUrl;

        if (!$yandexUrl) {
            return response()->json([
                'message' => 'Yandex URL не найден',
                'data' => null
            ], 404);
        }

        return response()->json([
            'message' => 'Yandex URL успешно получен',
            'data' => $yandexUrl
        ]);
    }
}
