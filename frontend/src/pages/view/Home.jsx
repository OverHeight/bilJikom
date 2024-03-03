import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import Ghibli from "../../assets/ghibli.jpg";
import Mononoke from "../../assets/mononoke.jpg";
import Hanashiro from "../../assets/hanashiro.jpg";
import Ucing from "../../assets/ucing.jpg";
import Komeng from "../../assets/komeng.jpg";
import Menyala from "../../assets/menyala.jpg";
import { BsThreeDots } from "react-icons/bs";
import { UseGetAlbum } from "../../API/albumAPI";

const Home = () => {
  const navigate = useNavigate();
  const album = UseGetAlbum();
  console.log(album);

  return (
    <div className="Home">
      <Navbar />
      <section
        id="Projects"
        s
        class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
      >
        <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a onClick={() => document.getElementById("my_modal_1").showModal()}>
            <img
              src={Ghibli}
              alt=""
              class="h-80 w-72 object-cover rounded-t-xl"
            />
            <div class="px-4 pys-3 w-72">
              <span class="text-black font-bold mr-3 uppercase text-xs">
                user
              </span>
              <p class="text-lg truncate block capitalize">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
                ut, nostrum repudiandae aut repellendus dolores corporis rem
                tempore laboriosam enim ex asperiores nobis saepe obcaecati
                tempora hic nisi doloribus facilis!
              </p>
              <div class="flex items-center">
                <p class="text-lg font-semibold text-black cursor-auto my-3"></p>
                <del>
                  <p class="text-sm text-gray-600 cursor-auto ml-2"></p>
                </del>
                <div class="ml-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-bag-plus"
                    viewBox="0 0 16 16"
                  ></svg>
                </div>
                <dialog id="my_modal_1" className="modal">
                  <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure>
                      <img src={Ghibli} alt="image" />
                    </figure>
                    <div className="card-body">
                      <button className="dropdown pl-60">
                        <div
                          tabIndex={0}
                          role="button"
                          className="btn rounded-full"
                        >
                          <BsThreeDots />
                        </div>
                        <ul
                          tabIndex={0}
                          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                        >
                          <li>
                            <a>Item 1</a>
                          </li>
                          <li>
                            <a>Item 2</a>
                          </li>
                        </ul>
                      </button>
                      <p>Click the button to listen on Spotiwhy app.</p>
                      <div className="card-actions justify-end">
                        <div className="modal-action">
                          <form method="dialog">
                            <button className="btn btn-primary">Back</button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </dialog>
              </div>
            </div>
          </a>
        </div>

        <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a onClick={() => document.getElementById("my_modal_2").showModal()}>
            <img
              src={Mononoke}
              alt=""
              class="h-80 w-72 object-cover rounded-t-xl"
            />
            <div class="px-4 pys-3 w-72">
              <span class="text-black font-bold mr-3 uppercase text-xs">
                user
              </span>
              <p class="text-lg truncate block capitalize">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
                ut, nostrum repudiandae aut repellendus dolores corporis rem
                tempore laboriosam enim ex asperiores nobis saepe obcaecati
                tempora hic nisi doloribus facilis!
              </p>
              <div class="flex items-center">
                <p class="text-lg font-semibold text-black cursor-auto my-3"></p>
                <del>
                  <p class="text-sm text-gray-600 cursor-auto ml-2"></p>
                </del>
                <div class="ml-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-bag-plus"
                    viewBox="0 0 16 16"
                  ></svg>
                </div>
                <dialog id="my_modal_2" className="modal">
                  <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure>
                      <img src={Mononoke} alt="image" />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">New album is released!</h2>
                      <p>Click the button to listen on Spotiwhy app.</p>
                      <div className="card-actions justify-end">
                        <div className="modal-action">
                          <form method="dialog">
                            <button className="btn btn-primary">Back</button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </dialog>
              </div>
            </div>
          </a>
        </div>

        <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a onClick={() => document.getElementById("my_modal_3").showModal()}>
            <img
              src={Hanashiro}
              alt=""
              class="h-80 w-72 object-cover rounded-t-xl"
            />
            <div class="px-4 pys-3 w-72">
              <span class="text-black font-bold mr-3 uppercase text-xs">
                user
              </span>
              <p class="text-lg truncate block capitalize">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
                ut, nostrum repudiandae aut repellendus dolores corporis rem
                tempore laboriosam enim ex asperiores nobis saepe obcaecati
                tempora hic nisi doloribus facilis!
              </p>
              <div class="flex items-center">
                <p class="text-lg font-semibold text-black cursor-auto my-3"></p>
                <del>
                  <p class="text-sm text-gray-600 cursor-auto ml-2"></p>
                </del>
                <div class="ml-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-bag-plus"
                    viewBox="0 0 16 16"
                  ></svg>
                </div>
                <dialog id="my_modal_3" className="modal">
                  <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure>
                      <img src={Hanashiro} alt="image" />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">New album is released!</h2>
                      <p>Click the button to listen on Spotiwhy app.</p>
                      <div className="card-actions justify-end">
                        <div className="modal-action">
                          <form method="dialog">
                            <button className="btn btn-primary">Back</button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </dialog>
              </div>
            </div>
          </a>
        </div>

        <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a onClick={() => document.getElementById("my_modal_4").showModal()}>
            <img
              src={Ucing}
              alt=""
              class="h-80 w-72 object-cover rounded-t-xl"
            />
            <div class="px-4 pys-3 w-72">
              <span class="text-black font-bold mr-3 uppercase text-xs">
                user
              </span>
              <p class="text-lg truncate block capitalize">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
                ut, nostrum repudiandae aut repellendus dolores corporis rem
                tempore laboriosam enim ex asperiores nobis saepe obcaecati
                tempora hic nisi doloribus facilis!
              </p>
              <div class="flex items-center">
                <p class="text-lg font-semibold text-black cursor-auto my-3"></p>
                <del>
                  <p class="text-sm text-gray-600 cursor-auto ml-2"></p>
                </del>
                <div class="ml-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-bag-plus"
                    viewBox="0 0 16 16"
                  ></svg>
                </div>
                <dialog id="my_modal_4" className="modal">
                  <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure>
                      <img src={Ucing} alt="image" />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">New album is released!</h2>
                      <p>Click the button to listen on Spotiwhy app.</p>
                      <div className="card-actions justify-end">
                        <div className="modal-action">
                          <form method="dialog">
                            <button className="btn btn-primary">Back</button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </dialog>
              </div>
            </div>
          </a>
        </div>

        <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a onClick={() => document.getElementById("my_modal_5").showModal()}>
            <img
              src={Menyala}
              alt=""
              class="h-80 w-72 object-cover rounded-t-xl"
            />
            <div class="px-4 pys-3 w-72">
              <span class="text-black font-bold mr-3 uppercase text-xs">
                user
              </span>
              <p class="text-lg truncate block capitalize">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
                ut, nostrum repudiandae aut repellendus dolores corporis rem
                tempore laboriosam enim ex asperiores nobis saepe obcaecati
                tempora hic nisi doloribus facilis!
              </p>
              <div class="flex items-center">
                <p class="text-lg font-semibold text-black cursor-auto my-3"></p>
                <del>
                  <p class="text-sm text-gray-600 cursor-auto ml-2"></p>
                </del>
                <div class="ml-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-bag-plus"
                    viewBox="0 0 16 16"
                  ></svg>
                </div>
                <dialog id="my_modal_5" className="modal">
                  <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure>
                      <img src={Menyala} alt="image" />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">New album is released!</h2>
                      <p>Click the button to listen on Spotiwhy app.</p>
                      <div className="card-actions justify-end">
                        <div className="modal-action">
                          <form method="dialog">
                            <button className="btn btn-primary">Back</button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </dialog>
              </div>
            </div>
          </a>
        </div>

        <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a onClick={() => document.getElementById("my_modal_6").showModal()}>
            <img
              src={Komeng}
              alt=""
              class="h-80 w-72 object-cover rounded-t-xl"
            />
            <div class="px-4 pys-3 w-72">
              <span class="text-black font-bold mr-3 uppercase text-xs">
                user
              </span>
              <p class="text-lg truncate block capitalize">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
                ut, nostrum repudiandae aut repellendus dolores corporis rem
                tempore laboriosam enim ex asperiores nobis saepe obcaecati
                tempora hic nisi doloribus facilis!
              </p>
              <div class="flex items-center">
                <p class="text-lg font-semibold text-black cursor-auto my-3"></p>
                <del>
                  <p class="text-sm text-gray-600 cursor-auto ml-2"></p>
                </del>
                <div class="ml-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-bag-plus"
                    viewBox="0 0 16 16"
                  ></svg>
                </div>
                <dialog id="my_modal_6" className="modal">
                  <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure>
                      <img src={Komeng} alt="image" />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">New album is released!</h2>
                      <p>Click the button to listen on Spotiwhy app.</p>
                      <div className="card-actions justify-end">
                        <div className="modal-action">
                          <form method="dialog">
                            <button className="btn btn-primary">Back</button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </dialog>
              </div>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
