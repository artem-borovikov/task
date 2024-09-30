<?php


namespace app\models;

use yii\db\ActiveRecord;

class Mediaplan extends ActiveRecord
{
    /**
     * Очистка корзины
     * @param int $mediaplan_id
     * @return int
     */
    public function remove(int $mediaplan_id): bool
    {
        $basket_lines = BasketLine::find()->where([
            'mediaplan_id' => $mediaplan_id,
        ])->all();

        OfferAdGraph::deleteAll()->where([
            'basket_line_id' => array_map(function($line) { $line->id; }, $basket_lines),
        ]);

        BasketLine::deleteAll()->where([
            'mediaplan_id' => $mediaplan_id,
        ]);

        MediaplanInventoryLink::deleteAll()->where([
            'mediaplan_id' => $mediaplan_id,
        ]);

        return 1;
    }

}
