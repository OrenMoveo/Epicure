import { useEffect } from "react";
import { AppDispatch, RootState } from "../../../reduxToolkit/store/store";
import { useDispatch, useSelector } from "react-redux";
import ChefCard from "../../../components/ChefCard/ChefCard";
import { fetchNewChefs } from "../../../reduxToolkit/thunks/chefThunk";

const NewChefs = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { newChefs } = useSelector((state: RootState) => state.chef);

  useEffect(() => {
    dispatch(fetchNewChefs());
  }, [dispatch]);
  return newChefs?.map((chef) => <ChefCard key={chef._id} chef={chef} />);
};

export default NewChefs;
