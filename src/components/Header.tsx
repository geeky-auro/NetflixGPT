import User from "../assets/User";

const Header = () => {
  return (
    <div className="absolute inset-0 flex justify-between  p-4">
      <div>
        <img
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
          className="w-44"
        />
      </div>

      <div className="ml-auto flex items-start space-x-4">
        <div>
          <img
            className="w-12"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
            alt="Netflix Avatar"
          />
        </div>
        <button className="text-white font-bold px-4 py-2 rounded-md focus:outline-none bg-red-600 hover:bg-red-700">
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Header;
