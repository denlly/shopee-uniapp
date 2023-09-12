export module HttpDataType {
  type ResultView<T> = {
    code: string
    msg: string
    result: T
  }
}
