import {
  BranchConnector,
  Connector,
  DecisionNode,
  EndNode,
  LoopBack,
  PredefinedProcessNode,
  ProcessNode,
  MergePoint,
  StartNode,
} from "@/components/FlowNodes";
import { FlowchartCard } from "@/components/FlowchartCard";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-slate-100 via-slate-50 to-white">
      <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-16 px-4 pb-24 pt-12 md:px-8 lg:px-12">
        <header className="flex flex-col gap-6 rounded-3xl border border-slate-200 bg-white/70 p-10 shadow-lg shadow-slate-200/60 backdrop-blur">
          <span className="w-fit rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">
            ГОСТ 19.701-90 · ISO 5807-85
          </span>
          <h1 className="text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
            Каждой функции — самостоятельная блок-схема
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-slate-600">
            Комплекс из шести согласованных диаграмм демонстрирует строгий
            нисходящий поток, обязательное слияние веток и использование
            предопределённых процессов при вызовах функций. Такой подход
            обеспечивает читаемость, облегчаeт ревизию и позволяет масштабировать
            систему, не нарушая ГОСТ 19.701-90 (ISO 5807-85).
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
              <p className="text-2xl font-semibold text-slate-900">6</p>
              <p className="text-sm text-slate-600">
                Независимых схем (main + 5 функций)
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
              <p className="text-2xl font-semibold text-slate-900">100%</p>
              <p className="text-sm text-slate-600">
                Нисходящий поток с контролем циклов
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
              <p className="text-2xl font-semibold text-slate-900">
                Предопределённые процессы
              </p>
              <p className="text-sm text-slate-600">
                Для всех межфункциональных вызовов
              </p>
            </div>
          </div>
        </header>

        <section className="grid gap-6 rounded-3xl border border-slate-200 bg-white/80 p-10 shadow-sm shadow-slate-200/70 backdrop-blur">
          <h2 className="text-2xl font-semibold text-slate-900">
            Ключевые требования стандарта
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-emerald-100 bg-emerald-50/80 p-6">
              <h3 className="text-lg font-semibold text-emerald-900">
                А) Строго нисходящий поток
              </h3>
              <p className="mt-3 text-sm leading-6 text-emerald-800">
                Каждая диаграмма построена сверху вниз. Замкнутые циклы
                визуализируются через проверку условия над телом цикла с
                возвратом по дуге «вверх», а посторонние «петли» отсутствуют.
                Такая композиция делает схему предсказуемой и облегчает аудит.
              </p>
            </article>
            <article className="rounded-2xl border border-sky-100 bg-sky-50/80 p-6">
              <h3 className="text-lg font-semibold text-sky-900">
                Б) Обязательное слияние веток
              </h3>
              <p className="mt-3 text-sm leading-6 text-sky-800">
                Любой ромб завершается явным объединением результатов. Ветви
                маркируются ответами «Да/Нет» либо «Ошибочно/Успешно», а после
                выполнения действий все пути сходятся в общий процесс, прежде
                чем продолжить последовательность.
              </p>
            </article>
            <article className="rounded-2xl border border-amber-100 bg-amber-50/80 p-6 md:col-span-2">
              <h3 className="text-lg font-semibold text-amber-900">
                В) Независимость функций
              </h3>
              <p className="mt-3 text-sm leading-6 text-amber-800">
                Схема каждой функции автономна: main отображает только
                взаимодействие модулей через предопределённые процессы, тогда
                как реализация деталей раскрыта внутри соответствующих
                диаграмм. Такое разбиение предотвращает перегрузку и сохраняет
                масштабируемость документации.
              </p>
            </article>
          </div>
        </section>

        <section className="flex flex-col gap-10">
          <h2 className="text-2xl font-semibold text-slate-900">
            Комплект диаграмм
          </h2>

          <FlowchartCard
            title="main"
            subtitle="Каркас программы"
            description="Главная функция описывает карту взаимодействия: только последовательность вызовов и управление ошибками, без детализации внутренних операций."
          >
            <StartNode label="Старт программы" />
            <Connector />
            <ProcessNode label="Инициализация среды" />
            <Connector />
            <PredefinedProcessNode label="create_array" />
            <Connector />
            <DecisionNode label="Выделение памяти успешно?" />
            <BranchConnector yesLabel="Да" noLabel="Нет" />
            <div className="flex w-full max-w-3xl flex-wrap justify-center gap-12 md:flex-nowrap">
              <div className="flex flex-1 min-w-[220px] flex-col items-center gap-4">
                <PredefinedProcessNode label="fill_array" />
                <Connector />
                <PredefinedProcessNode label="process_array" />
                <Connector />
                <PredefinedProcessNode label="print_report" />
                <Connector />
                <PredefinedProcessNode label="cleanup" />
              </div>
              <div className="flex flex-1 min-w-[220px] flex-col items-center gap-4">
                <ProcessNode label="Запись ошибки" />
                <Connector />
                <PredefinedProcessNode label="handle_fatal_error" />
              </div>
            </div>
            <MergePoint label="Свод результатов" />
            <Connector className="!h-4" />
            <ProcessNode label="Возврат к ОС" />
            <Connector />
            <EndNode label="Завершение" />
          </FlowchartCard>

          <FlowchartCard
            title="create_array"
            subtitle="Локальная реализация"
            description="Функция отвечает за подготовку динамического массива и статус возврата."
          >
            <StartNode label="Вызов create_array" />
            <Connector />
            <ProcessNode label="Прочитать требуемый размер n" />
            <Connector />
            <DecisionNode label="n допустим?" />
            <BranchConnector yesLabel="Да" noLabel="Нет" />
            <div className="flex w-full max-w-4xl flex-wrap justify-center gap-12 md:flex-nowrap">
              <div className="flex flex-1 min-w-[220px] flex-col items-center gap-4">
                <ProcessNode label="Рассчитать байты для выделения" />
                <Connector />
                <ProcessNode label="Выполнить malloc" />
              </div>
              <div className="flex flex-1 min-w-[220px] flex-col items-center gap-4">
                <ProcessNode label="Вернуть код ошибки INVALID_SIZE" />
                <Connector />
                <EndNode label="Завершение" />
              </div>
            </div>
            <MergePoint label="Путь продолжения" />
            <Connector className="!h-2" />
            <DecisionNode label="malloc вернул указатель?" />
            <BranchConnector yesLabel="Да" noLabel="Нет" />
            <div className="flex w-full max-w-4xl flex-wrap justify-center gap-12 md:flex-nowrap">
              <div className="flex flex-1 min-w-[220px] flex-col items-center gap-4">
                <ProcessNode label="Инициализировать память нулями" />
                <Connector />
                <ProcessNode label="Установить статус SUCCESS" />
              </div>
              <div className="flex flex-1 min-w-[220px] flex-col items-center gap-4">
                <ProcessNode label="Залогировать отказ выделения" />
                <Connector />
                <PredefinedProcessNode label="report_failure" />
                <Connector />
                <ProcessNode label="Установить статус ALLOCATION_ERROR" />
              </div>
            </div>
            <MergePoint label="Единый выход" />
            <Connector className="!h-2" />
            <ProcessNode label="Вернуть {pointer, status}" />
            <Connector />
            <EndNode label="Завершение" />
          </FlowchartCard>

          <FlowchartCard
            title="fill_array"
            subtitle="Заполнение массива"
            description="Цикл чтения данных подчёркивает верхний контроль условия и чёткий возврат по дуге цикла."
          >
            <StartNode label="Вызов fill_array" />
            <Connector />
            <ProcessNode label="Инициализировать индекс i = 0" />
            <Connector />
            <DecisionNode label="i < n?" />
            <BranchConnector yesLabel="Да" noLabel="Нет" />
            <div className="flex w-full max-w-4xl flex-wrap justify-center gap-12 md:flex-nowrap">
              <div className="flex flex-1 min-w-[220px] flex-col items-center gap-4">
                <ProcessNode label="Прочитать входное значение" />
                <Connector />
                <DecisionNode label="Ввод корректен?" />
                <BranchConnector yesLabel="Да" noLabel="Нет" />
                <div className="flex w-full flex-wrap justify-center gap-10 md:flex-nowrap">
                  <div className="flex flex-1 min-w-[220px] flex-col items-center gap-4">
                    <ProcessNode label="Записать элемент в array[i]" />
                    <Connector />
                    <ProcessNode label="i = i + 1" />
                    <LoopBack label="Проверка условия" />
                  </div>
                  <div className="flex flex-1 min-w-[220px] flex-col items-center gap-4">
                    <ProcessNode label="Сообщить об ошибке ввода" />
                    <Connector />
                    <PredefinedProcessNode label="request_retry" />
                    <LoopBack label="Повтор чтения" />
                  </div>
                </div>
              </div>
              <div className="flex flex-1 min-w-[220px] flex-col items-center gap-4">
                <ProcessNode label="Зафиксировать успех заполнения" />
              </div>
            </div>
            <MergePoint label="Единый выход" />
            <Connector className="!h-4" />
            <ProcessNode label="Вернуть статус операции" />
            <Connector />
            <EndNode label="Завершение" />
          </FlowchartCard>

          <FlowchartCard
            title="process_array"
            subtitle="Аналитическая обработка"
            description="Диаграмма выделяет два сценария: успешная агрегация и обработка исключений."
          >
            <StartNode label="Вызов process_array" />
            <Connector />
            <ProcessNode label="Инициализация агрегаторов (sum, min, max)" />
            <Connector />
            <DecisionNode label="Пустой массив?" />
            <BranchConnector yesLabel="Да" noLabel="Нет" />
            <div className="flex w-full max-w-4xl flex-wrap justify-center gap-12 md:flex-nowrap">
              <div className="flex flex-1 min-w-[220px] flex-col items-center gap-4">
                <PredefinedProcessNode label="handle_empty_dataset" />
              </div>
              <div className="flex flex-1 min-w-[220px] flex-col items-center gap-4">
                <ProcessNode label="Перебрать элементы" />
                <Connector />
                <ProcessNode label="Обновить sum, min, max" />
                <Connector />
                <ProcessNode label="Рассчитать среднее" />
              </div>
            </div>
            <MergePoint label="Результат обработки" />
            <Connector className="!h-4" />
            <ProcessNode label="Вернуть структуру результата" />
            <Connector />
            <EndNode label="Завершение" />
          </FlowchartCard>

          <FlowchartCard
            title="print_report"
            subtitle="Представление результата"
            description="Отдельная схема подчёркивает, что визуализация отделена от вычислений."
          >
            <StartNode label="Вызов print_report" />
            <Connector />
            <ProcessNode label="Подготовить формат вывода" />
            <Connector />
            <DecisionNode label="Статус SUCCESS?" />
            <BranchConnector yesLabel="Да" noLabel="Нет" />
            <div className="flex w-full max-w-4xl flex-wrap justify-center gap-12 md:flex-nowrap">
              <div className="flex flex-1 min-w-[220px] flex-col items-center gap-4">
                <ProcessNode label="Показать сводку (sum, min, max, avg)" />
              </div>
              <div className="flex flex-1 min-w-[220px] flex-col items-center gap-4">
                <ProcessNode label="Отобразить сообщение об ошибке" />
                <Connector />
                <PredefinedProcessNode label="advise_retry" />
              </div>
            </div>
            <MergePoint label="Финальная ветка" />
            <Connector className="!h-4" />
            <ProcessNode label="Записать лог завершения" />
            <Connector />
            <EndNode label="Завершение" />
          </FlowchartCard>

          <FlowchartCard
            title="cleanup"
            subtitle="Детерминированное освобождение"
            description="Последовательность завершает жизненный цикл данных и закрывает ресурсы."
          >
            <StartNode label="Вызов cleanup" />
            <Connector />
            <DecisionNode label="array != nullptr?" />
            <BranchConnector yesLabel="Да" noLabel="Нет" />
            <div className="flex w-full max-w-4xl flex-wrap justify-center gap-12 md:flex-nowrap">
              <div className="flex flex-1 min-w-[220px] flex-col items-center gap-4">
                <ProcessNode label="Освободить память массива" />
                <Connector />
                <ProcessNode label="Сбросить указатель в nullptr" />
              </div>
              <div className="flex flex-1 min-w-[220px] flex-col items-center gap-4">
                <ProcessNode label="Пропустить освобождение" />
              </div>
            </div>
            <MergePoint label="Завершение ветвления" />
            <Connector className="!h-4" />
            <ProcessNode label="Очистить связанные ресурсы" />
            <Connector />
            <ProcessNode label="Вернуть статус завершающих операций" />
            <Connector />
            <EndNode label="Завершение" />
          </FlowchartCard>
        </section>
      </main>
    </div>
  );
}
