const CategoryNav = () => {
    const dispatch = useDispatch();
    const allCategories = useSelector(state => state.categories)
  
    const categoryArray = Object.values(allCategories);
  
    console.log(categoryArray)
  
    return (
      <div>
        <h1>Helloasdffffffffffffffffffffffffffffffffffffffffff</h1>
      </div>
    );
  };
  
  export default CategoryNav;