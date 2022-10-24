import React, { useEffect, useState } from "react";
import PulseLoader from "react-spinners/PulseLoader";
import "./users.css";

const Users = () => {
  const [users, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const pages = [...Array(totalPages).keys()].map((num) => num + 1);
  const finalPages = 5;

  const handleClick = (num) => {
    setPage(num);
  };

  useEffect(() => {
    const getUser = async () => {
      setLoading(true);

      const res = await fetch(
        `https://randomuser.me/api/?${page}&results=10&seed=abc`
      );
      // https://randomuser.me/api/?page=3&results=10&seed=abc
      // https://randomuser.me/api/?page=${page}&results=10&seed=abc
      const data = await res.json();
      setUser(data.results);
      setLoading(false);
      // console.log(data.login.uuid);
      // console.log(data.id)

      setTotalPages(Math.ceil(data.results.length / USER_PER_PAGE));
    };
    getUser();
  }, []);

  const USER_PER_PAGE = 2;
  const startIndex = (page - 1) * USER_PER_PAGE;
  const selectedUsers = users.slice(startIndex, startIndex + USER_PER_PAGE);
  // const total = data?.results?.length;
  // const pages = 50;

  // const handleNext = (e) => {
  //   e.preventDefault();
  // }

  // const handlePrev = (e) => {
  //   e.preventDefault();
  // }

  return (
    <div className="users">
      <div className="pagination">
        {loading ? (
          <>
            <PulseLoader
              loading={loading}
              size={100}
              color="#f9934e"
              className="loader"
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </>
        ) : (
          selectedUsers.map((user) => (
            <div className="user" key={user.login.uuid}>
              <img
                className="user-img"
                src={user.picture.medium}
                alt="user headshot"
              />
              <p className="user-name">
                {user.name.first} <span>{user.name.last}</span>
              </p>
              <p className="user-phone">{user.phone}</p>
              <p className="user-mail">{user.email}</p>
            </div>
          ))
        )}
      </div>

      <div className="pagination-down">
        <div className="pagination-buttons">
          <button
            disabled={page <= 1}
            // aria-disabled={page <= pages}
            onClick={() => setPage((prev) => prev - 1)}
          >
            Prev
          </button>
          <span>
            {pages.map((num) => (
              <button
                key={num}
                onClick={() => handleClick(num)}
                disabled={num === page}
              >
                {num}
              </button>
            ))}
          </span>
          <button
            disabled={page >= finalPages}
            aria-disabled={page >= finalPages}
            onClick={() => setPage((prev) => prev + 1)}
          >
            Next
          </button>
        </div>
        <p className="pagination-text">
           {page} of {finalPages}
        </p>
      </div>
    </div>
  );
};

export default Users;

// const person = data.results[0];
// const { email, phone } = person;
// const { large: image } = person.picture;
// const { first, last } = person.name;
// const {
//   dob: { age },
// } = person;
// // console.log(person);
// // setUser(person);
// return{
//   image, name: `${first} ${last}`, phone, email, age
// }

// getUser().then((data) => {
//   setUser(data.data)
//   // console.log(data);
// });

// const displayUser = async () => {
//   const person = await getUser();
//   console.log(person);
// };
