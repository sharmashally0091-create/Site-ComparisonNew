export async function retry<T>(
  fn: () => Promise<T>,
  retries = 2,
  delay = 3000
): Promise<T> {

  let lastError: any;

  for (let i = 0; i <= retries; i++) {

    try {

      return await fn();

    } catch (error) {

      lastError = error;

      console.log(
        `Retry Attempt ${i + 1} Failed`
      );

      await new Promise((resolve) =>
        setTimeout(resolve, delay)
      );
    }
  }

  throw lastError;
}