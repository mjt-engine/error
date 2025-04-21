import { isDefined } from "@mjt-engine/object";
import type { ErrorDetail } from "./ErrorDetail";
import { errorToText } from "./errorToText";

export const errorToErrorDetail = ({
  error,
  extra,
  stack,
}: {
  error: unknown;
  stack?: string;
  extra?: unknown[];
}): ErrorDetail => {
  if (error instanceof Error) {
    const cause = isDefined(error.cause)
      ? errorToErrorDetail({ error: error.cause })
      : undefined;
    return {
      message: error.message,
      stack: error.stack ?? stack,
      extra,
      cause,
    };
  }
  return {
    message: errorToText(error),
    stack,
    extra,
  };
};
