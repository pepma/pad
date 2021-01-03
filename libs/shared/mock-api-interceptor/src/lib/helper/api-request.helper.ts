export class ApiRequestHelper {
  static getUrlParams(url: string): URLSearchParams {
    return new URL(url).searchParams;
  }
}
