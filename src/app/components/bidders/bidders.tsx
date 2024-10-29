import { TBidder } from "@/model/model";

interface IBidders {
  bidders: TBidder[];
}

export const Bidders = ({ bidders }: IBidders) => {
  return (
    <>
      <div className="flex gap-[15px] items-center p-[10px] font-bold bg-slate-300">
        <div className="flex-1 text-center">Наименование участника</div>
        <div className="flex-1 text-center">Наличие комплекса мероприятий, повышающих стандарты качества</div>
        <div className="flex-1 text-center">Срок поставки, мес</div>
        <div className="flex-1 text-center">Гарантийные обязательства, мес</div>
        <div className="flex-1 text-center">Условия оплаты</div>
        <div className="flex-1 text-center">Цена без учёта НДС, руб</div>
      </div>
      {bidders.map((bidder, i) => {
        const bg = i % 2 === 0 ? "bg-slate-200" : "bg-slate-100";
        return (
          <div className={`flex gap-[15px] items-center p-[10px] ${bg}`}>
            <div className="flex-1 text-center">{bidder.name}</div>
            <div className="flex-1 text-center">{bidder.qualityImprovement}</div>
            <div className="flex-1 text-center">{bidder.deliveryTime}</div>
            <div className="flex-1 text-center">{bidder.warranty}</div>
            <div className="flex-1 text-center">{bidder.payment}</div>
            <div className="flex-1 text-center">
                <div>{bidder.price} руб.</div>
                <div className="text-red-600">{bidder.price} руб.</div>
                <div className="text-green-600">{bidder.price} руб.</div>
            </div>
          </div>
        );
      })}
    </>
  );
};
