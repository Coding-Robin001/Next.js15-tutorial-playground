// components/ErrorMessage.tsx
"use client";

type Props = {
  message?: string;
  color?: "red" | "blue";
  onRetry?: () => void;
  isLoading?: boolean;
};

const colorStyles = {
  red: {
    title: "text-red-400",
    details: "text-red-300",
    btn: "bg-red-500 hover:bg-red-600",
  },
  blue: {
    title: "text-blue-400",
    details: "text-blue-300",
    btn: "bg-blue-500 hover:bg-blue-600",
  },
};

export default function ErrorMessage({
  message,
  color = "red",
  onRetry,
  isLoading,
}: Props) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 h-100 w-[500px]">
      <p className={`text-lg font-semibold ${colorStyles[color].title}`}>
        Something Went Wrong!
      </p>
      {message && <pre className={`text-sm ${colorStyles[color].details}`}>{message}</pre>}

      {onRetry && (
        <button
          onClick={onRetry}
          disabled={isLoading}
          className={`px-4 py-2 text-white rounded-lg transition disabled:opacity-50 ${colorStyles[color].btn}`}
        >
          {isLoading ? (
            <span className="inline-flex items-center gap-2">
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Retrying…
            </span>
          ) : (
            "Retry"
          )}
        </button>
      )}
    </div>
  );
}
