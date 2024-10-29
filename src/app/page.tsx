import { Bidders } from "./components";

const mock = [
  {
    name: "Участник №1",
    deliveryTime: "12 месяцев",
    qualityImprovement: "-",
    warranty: "36",
    payment: "Предоплата 30%",
    price: "2 500 000.00",
  },
  {
    name: "Участник №2",
    deliveryTime: "10 месяцев",
    qualityImprovement: "-",
    warranty: "60",
    payment: "Предоплата 15%",
    price: "3 500 000.00",
  },
  {
    name: "Участник №3",
    deliveryTime: "6 мес",
    qualityImprovement: "ГОСТ Р ИСО 9001-2015",
    warranty: "60",
    payment: "Предоплата 10%",
    price: "4 500 000.00",
  },
  {
    name: "Участник №4",
    deliveryTime: "18 месяцев",
    qualityImprovement: "-",
    warranty: "24",
    payment: "Предоплата 50%",
    price: "1 000 000.00",
  }
]

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-[20px] py-[50px]">
      <header>
        <div className="text-[24px]">Ход торгов <b>Тестовые торги</b> на <b>аппарат №12421421</b> (29.10.2020 07:00)</div>
      </header>
      <main className="">
        <Bidders bidders={mock} />
      </main>
      <footer className="">
        
      </footer>
    </div>
  );
}
