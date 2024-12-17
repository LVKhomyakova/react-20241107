'use client';
import { Nav } from "../../ui/nav/Nav.jsx";
import { Loader } from "../../ui/loader/loader.jsx";
import { Error } from "../../ui/error/Error.jsx";
import { useGetRestaurantsQuery } from "../../../redux/services/api/index.js";

export const RestaurantsNav = () => {
  const {data: items, isLoading, isError} = useGetRestaurantsQuery(undefined, {
    selectFromResult: (result) => {
      return ({
        ...result,
        data: result.data?.map(item => ({...item, path: `/restaurants/${item.id}`}))
      })
    }
  });

  if (isLoading) {
    return <Loader/>;
  }

  if (isError) {
    return <Error message="Рестораны не найдены."/>;
  }

  if (!items?.length) return;

  return <Nav items={items} matchType="startsWith"/>;
};