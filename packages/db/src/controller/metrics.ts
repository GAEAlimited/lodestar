export interface ILevelDbControllerMetrics {
  dbReadReq: ICounter<"bucket">;
  dbReadItems: ICounter<"bucket">;
  dbWriteReq: ICounter<"bucket">;
  dbWriteItems: ICounter<"bucket">;
  dbSizeTotal: IGauge;
}

type Labels<T extends string> = Partial<Record<T, string | number>>;

interface ICounter<T extends string> {
  inc(value?: number): void;
  inc(labels: Labels<T>, value?: number): void;
  inc(arg1?: Labels<T> | number, arg2?: number): void;
}

interface IGauge<T extends string = string> {
  set(value: number): void;
  set(labels: Labels<T>, value: number): void;
  set(arg1?: Labels<T> | number, arg2?: number): void;
}
