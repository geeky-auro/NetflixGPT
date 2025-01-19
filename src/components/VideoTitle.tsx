const VideoTitle = (props: any) => {
  const { title, overview } = props;
  return (
    <div className="pt-36 px-12">
      <div className="font-bold text-6xl">{title}</div>
      <div className="py-6 text-lg w-1/2">{overview}</div>
      <div className="">
        <button
          type="button"
          className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          <i className="fa fa-play w-4"></i> Play
        </button>

        <button
          type="button"
          className="mx-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          <i className="fa fa-info w-4"></i> Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
