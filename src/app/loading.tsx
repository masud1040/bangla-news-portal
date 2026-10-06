const Loading = () => {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="text-center">
        <div className="mx-auto mb-5 h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-red-600"></div>

        <h2 className="text-lg font-semibold text-gray-800">
          সংবাদ লোড হচ্ছে...
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          সর্বশেষ খবরগুলো প্রস্তুত করা হচ্ছে
        </p>
      </div>
    </div>
  );
};

export default Loading;