import { useEffect } from "react";
import { AppDispatch, RootState } from "../../../reduxToolkit/store/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllChefs } from "../../../reduxToolkit/thunks/chefThunk";
import ChefCard from "../../../components/ChefCard/ChefCard";

const AllChefs = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { allChefs } = useSelector((state: RootState) => state.chef);

  useEffect(() => {
    dispatch(fetchAllChefs());
  }, [dispatch]);
  return allChefs?.map((chef) => <ChefCard key={chef._id} chef={chef} />);
};

export default AllChefs;
