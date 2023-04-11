import { FC } from "react";

const SearchDiv = () => {
  return <Search />;
};

export default SearchDiv;

const PropertyCard = () => (
  <div className="card w-96 bg-secondary shadow-xl">
    <div className="card-body">
      <h2 className="card-title">Property title</h2>
      <p>Property Info</p>
    </div>
  </div>
);

const PropertyData = [1, 3, 4, 5, 5, 6, 6, 6, 9, 0, 0, 23, 32];
const FilterData = [1, 3, 4, 5, 5];

interface filterType {
  id: number;
}

const Filter: FC<filterType> = ({ id }) => (
  <select defaultValue="test" className="select select-bordered max-w-xs">
    <option disabled selected>
      Filter {id}
    </option>
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </select>
);

function Search() {
  return (
    <main className="w-screen h-screen flex flex-col gap-4 p-10 mt-5 ">
      <div className="w-full  px-5 flex lg:flex-row sm:flex-col gap-3 items-center ">
        <div className=" h-full border-primary rounded-lg flex px-5 items-center gap-4 flex-wrap ">
          {FilterData.map((fish, id) => (
            <Filter id={id} key={id} />
          ))}
        </div>
        <button className="btn hover:bg-primary-active btn-primary lg:flex-1 mr-5 text-lg sm:w-[90%] ">
          Search
        </button>
      </div>
      <div className="flex  w-full  flex-wrap gap-5 p-5 justify-center h-[80%] overflow-scroll ">
        {PropertyData.map((fish, id) => (
          <PropertyCard key={id} />
        ))}
      </div>
    </main>
  );
}
