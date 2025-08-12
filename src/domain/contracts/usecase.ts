export interface UseCase<Input = unknown, Output = unknown> {
  execute(...params: Input[]): Promise<Output>;
}
