import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filteredResult } from "../redux/filters/actions";
import Blog from "./Blog";

const BlogContainer = () => {
  const { blogs, filters } = useSelector((state) => state);
  const { searchText } = filters;
  const dispatch = useDispatch();
  const shouldDisplay = (blog) => {
    const keys = ["title", "name", "category"];
    let matchSearchedText = !searchText
      ? true
      : keys.some(
          (key) =>
            blog[key]?.toLowerCase().includes(searchText) ||
            blog.author[key]?.toLowerCase().includes(searchText)
        );
    let matchCategory = !filters.category
      ? true
      : filters.category === blog.category;
    let matchAuthor = !filters.author
      ? true
      : filters.author === blog.author.name;

    let matchDuration =
      filters.duration && filters.duration.length == 0
        ? true
        : blog.duration > filters.duration[0] &&
          blog.duration < filters.duration[1];

    return matchSearchedText && matchAuthor && matchCategory && matchDuration;
  };

  const filterCategories = (category) => {
    dispatch(filteredResult("category", category));
  };
  const filterAuthors = (author) => {
    dispatch(filteredResult("author", author));
  };

  return (
    <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
      {blogs.filter(shouldDisplay).map((blog) => (
        <Blog
          key={blog.blogId}
          blog={blog}
          filterCategories={filterCategories}
          filterAuthors={filterAuthors}
        />
      ))}
    </div>
  );
};

export default BlogContainer;
