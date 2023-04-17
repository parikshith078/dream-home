"use client";
import { FC, useEffect, useState } from "react";
import {
  PropertyType,
  getDataFromQuery,
  getDateFromTableFiled,
  getFilterProperties,
} from "../data/dataQuery";
import { PriceRange, priceRange, propertyType } from "../data/infoFile";
import Loading from "./Loading";

const SearchDiv = () => {
  return <Search />;
};

export default SearchDiv;

export type FilterType = {
  branch: string;
  type: PropertyType;
  price: PriceRange;
};

function Search() {
  const [branchNames, setBranchNames] = useState<any>([]);
  const [propertyData, setPropertyData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [firstLoad, setFirstLoad] = useState<boolean>(true);

  const [filter, setFilter] = useState<FilterType>({
    branch: "All Branches",
    type: "All Types",
    price: "All Price",
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDateFromTableFiled("branch", "b_add");
      setBranchNames(data);
      if (firstLoad) {
        const result = await getDataFromQuery("property");
        setPropertyData(result);
        setFirstLoad(false);
      }
      // const result = await getDataFromQuery("property");
      // setPropertyData(result);

      if (!firstLoad) {
        const filteredProperties = await getFilterProperties(filter);
        setPropertyData(filteredProperties["data"]);
        console.log("filteredProperties");
        console.log(filteredProperties["data"]);
      }
    };

    setLoading(true);
    fetchData();
    setLoading(false);
  }, [filter]);

  // const HoldPropertyData = propertyData;
  // console.log("propertyData");
  // console.log(HoldPropertyData);

  const handelSelect = (e: any) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
  };

  function handelSearch(event: any) {
    //TODO: use query to get data from database to filter data
    event.preventDefault();
    setFilter({
      branch: "All Branches",
      type: "All Types",
      price: "All Price",
    });
  }

  return (
    <main className="w-screen h-screen flex flex-col gap-4 p-10 mt-5 ">
      <div className="w-full  px-5 flex lg:flex-row sm:flex-col gap-3 items-center ">
        {loading && <Loading />}
        {propertyData.length === 0 && !loading && (
          <h1 className=" text-3xl text-red-300 absolute top-[30%] left-[40%]  ">
            No Data Found
          </h1>
        )}
        <div className=" h-full border-primary rounded-lg flex px-5 items-center gap-4 flex-wrap ">
          <FilterComponent
            name="branch"
            data={branchNames}
            handleFilter={handelSelect}
            title="All Branch"
            value={filter.branch}
          />
          <FilterComponent
            name="type"
            data={propertyType}
            handleFilter={handelSelect}
            title="All Types"
            value={filter.type}
          />
          <FilterComponent
            name="price"
            data={priceRange}
            handleFilter={handelSelect}
            title="All Price"
            value={filter.price}
          />
        </div>
        <button
          onClick={handelSearch}
          className="btn hover:bg-primary-active btn-primary lg:flex-1 mr-5 text-lg sm:w-[90%] "
        >
          Reset Filters
        </button>
      </div>
      <div className="flex  w-full  flex-wrap gap-5 p-5 justify-center h-[80%] overflow-scroll ">
        {propertyData.map((fish, id) => (
          <PropertyCard key={id} data={fish} />
        ))}
      </div>
    </main>
  );
}

const PropertyCard = ({ data }) => (
  <div className="card w-96 bg-secondary shadow-xl">
    <div className="card-body">
      <h2 className="card-title">{data.prop_addr}</h2>
      <div className="grid grid-rows-2 grid-flow-col gap-4">
        <p>
          Rent: <b>₹{data.rent}</b>
        </p>
        <p>
          Staff: <b> {data.reg_by}</b>
        </p>
        <p>
          Type: <b> {data.type}</b>
        </p>
        <p>
          Rooms: <b> {data.rooms}</b>
        </p>
      </div>
    </div>
  </div>
);

const FilterComponent = ({ name, data, handleFilter, title, value }) => (
  <select
    value={value}
    name={name}
    className="select select-bordered max-w-xs"
    onChange={(e) => handleFilter(e)}
  >
    <option selected>{title}</option>
    {data.map((val, id) => (
      <option key={id}>{val}</option>
    ))}
  </select>
);
