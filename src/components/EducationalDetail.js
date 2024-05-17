import React, { useRef } from "react";
import personaldocuments from "../resources/images/personal-documents.svg";

import { validateForm } from "../utils/validateData";

function EducationalDetail({
  display,
  handlePrevious,
  formData,
  setFormData,
  handleNext,

}) {
  const buttonRef = useRef();


  const handleSubmit = async (e) => {
    e.preventDefault();

    let data = new FormData(e.target);
    let formObject = Object.fromEntries(data.entries());
    if (validateForm(formObject)) {
      setFormData({
        ...formData,
        ...formObject,
      });

      handleNext();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`w-full h-full   absolute ${display} lg:flex-row flex-col  overflow-auto`}
    >
      <div className="w-1/2  justify-center items-center lg:flex hidden">
        <img
          src={personaldocuments}
          className="rounded w-[80%] h-[80%]"
          alt="college side view"
        />
        {/* <img src="" alt="" /> */}
      </div>
      
      <div className="lg:w-1/2 w-full">
        <div className="w-full h-full lg:block flex flex-col justify-center items-center px-3">
          <div className="pt-4 text-3xl text-blue-600  font-medium lg:w-full w-full">
            Educational Details
          </div>
          <div className="py-1 text-md text-gray-500 lg:w-full w-full">
            Enter your education details
          </div>
          <div className="flex flex-col justify-center items-center gap-1 w-full ">
            <fieldset className="border-2 rounded-xl p-5 lg:grid  grid-cols-2 gap-x-6 gap-y-4  w-full flex flex-col justify-center items-center ">
              <legend className="col-span-2 px-2 lg:text-lg lg:w-auto w-full">
                Academic Detail
              </legend>

              <div className="lg:col-span-1 col-span-3 text-gray-500 lg:w-auto w-[85%]">
              <label htmlFor="gender" className="block">
                Select
              </label>
              <select
                name="gender"
                id="gender"
                display-message="Gender"
                // onChange={handleChange}
                className="text-md p-2 rounded-md outline-none lg:w-[95%] w-full appearance-none border-2 border-grey-200 focus:bg-gray-200">
                <option value="default">--select--</option>
                <option value="male">Currenty pursuing 12th</option>
                <option value="female">Currenty pursuing 11th</option>
                <option value="female">Currenty pursuing graduation</option>
              </select>
            </div>
 
            </fieldset>
          </div>
          <div className="flex flex-col justify-center items-center gap-1 w-full ">
            <fieldset className="border-2 rounded-xl p-5 lg:grid  grid-cols-2 gap-x-6 gap-y-4  w-full flex flex-col justify-center items-center ">
              <legend className="col-span-2 px-2 lg:text-lg lg:w-auto w-full">
                10<sup>th</sup> Education
              </legend>
              <div className="col-span-2 lg:w-auto w-full">
                <label htmlFor="tenthSchool" className="block">
                  School Name
                </label>
                <input
                  type="text"
                  name="tenthSchool"
                  id="tenthSchool"
                  display-message="Tenth School Name"
                  placeholder="10th School Name"
                  // onChange={handleChange}
                  className="text-md p-2 rounded-md outline-none lg:w-[97%] w-full border-2 border-gray-200 focus:bg-gray-200"
                />
              </div>
              {/* Marks */}
              <div className="lg:col-span-1 col-span-2 lg:w-auto w-full">
                <label htmlFor="tenthPassingYear" className="block">
                  Science
                </label>
                <input
                  type="text"
                  name="tenthPassingYear"
                  id="tenthPassingYear"
                  display-message="Tenth Passing Year"
                  placeholder="Mark"
                  // onChange={handleChange}
                  className="text-md p-2 rounded-md outline-none lg:w-[95%] w-full border-2 border-gray-200 focus:bg-gray-200"
                />
              </div>
              {/* Maths */}
              <div className="lg:col-span-1 col-span-2 lg:w-auto w-full">
                <label htmlFor="tenthPassingYear" className="block">
                  Maths
                </label>
                <input
                  type="text"
                  name="tenthPassingYear"
                  id="tenthPassingYear"
                  display-message="Tenth Passing Year"
                  placeholder="Mark"
                  // onChange={handleChange}
                  className="text-md p-2 rounded-md outline-none lg:w-[95%] w-full border-2 border-gray-200 focus:bg-gray-200"
                />
              </div>
              {/* Social */}
              <div className="lg:col-span-1 col-span-2 lg:w-auto w-full">
                <label htmlFor="tenthPassingYear" className="block">
                  Social
                </label>
                <input
                  type="text"
                  name="tenthPassingYear"
                  id="tenthPassingYear"
                  display-message="Tenth Passing Year"
                  placeholder="Social"
                  // onChange={handleChange}
                  className="text-md p-2 rounded-md outline-none lg:w-[95%] w-full border-2 border-gray-200 focus:bg-gray-200"
                />
              </div>

              {/* English */}

              <div className="lg:col-span-1 col-span-2 lg:w-auto w-full">
                <label htmlFor="tenthPassingYear" className="block">
                  English
                </label>
                <input
                  type="text"
                  name="tenthPassingYear"
                  id="tenthPassingYear"
                  display-message="Tenth Passing Year"
                  placeholder="Mark"
                  // onChange={handleChange}
                  className="text-md p-2 rounded-md outline-none lg:w-[95%] w-full border-2 border-gray-200 focus:bg-gray-200"
                />
              </div>

              {/* Tamil */}

              <div className="lg:col-span-1 col-span-2 lg:w-auto w-full">
                <label htmlFor="tenthPassingYear" className="block">
                  Tamil
                </label>
                <input
                  type="text"
                  name="tenthPassingYear"
                  id="tenthPassingYear"
                  display-message="Tenth Passing Year"
                  placeholder="Mark"
                  // onChange={handleChange}
                  className="text-md p-2 rounded-md outline-none lg:w-[95%] w-full border-2 border-gray-200 focus:bg-gray-200"
                />
              </div>

              <div className="lg:col-span-1 col-span-2 lg:w-auto w-full">
                <label htmlFor="tenthPassingYear" className="block">
                  Passing Year
                </label>
                <input
                  type="text"
                  name="tenthPassingYear"
                  id="tenthPassingYear"
                  display-message="Tenth Passing Year"
                  placeholder="10th Passing Year"
                  // onChange={handleChange}
                  className="text-md p-2 rounded-md outline-none lg:w-[95%] w-full border-2 border-gray-200 focus:bg-gray-200"
                />
              </div>
              <div className="lg:col-span-1 col-span-2 lg:w-auto w-full">
                <label htmlFor="tenthPercentage" className="block">
                  Total
                </label>
                <input
                  type="text"
                  name="tenthPercentage"
                  id="tenthPercentage"
                  display-message="Tenth Percentage"
                  placeholder="Total Mark"
                  // onChange={handleChange}
                  className="text-md p-2 rounded-md outline-none lg:w-[95%] w-full border-2 border-gray-200 focus:bg-gray-200"
                />
              </div>
            </fieldset>
            <fieldset className="border-2 rounded-xl p-5 lg:grid  grid-cols-2 gap-x-6 gap-y-4  w-full flex flex-col justify-center items-center ">
              <legend className="col-span-2 lg:text-lg px-2 lg:w-auto w-full">
                12<sup>th</sup> Education
              </legend>
              <div className="col-span-2 lg:w-auto w-full">
                <label htmlFor="twelfthSchool" className="block">
                  School Name
                </label>
                <input
                  type="text"
                  id="twelfthSchool"
                  name="twelfthSchool"
                  dipslay-message="Twelfth School Name"
                  placeholder="12th School Name"
                  // onChange={handleChange}
                  className="text-md p-2 rounded-md outline-none lg:w-[97%] w-full border-2 border-gray-200 focus:bg-gray-200"
                />
              </div>
              {/* Physics */}

              <div className="lg:col-span-1 col-span-2 lg:w-auto w-full">
                <label htmlFor="twelfthPassingYear" className="block">
                  Physics
                </label>
                <input
                  type="text"
                  id="twelfthPassingYear"
                  name="twelfthPassingYear"
                  display-message="Twelfth Passing Year"
                  placeholder="Mark"
                  // onChange={handleChange}
                  className="text-md p-2 rounded-md outline-none lg:w-[95%] w-full border-2 border-gray-200 focus:bg-gray-200"
                />
              </div>

              {/* Chemistry */}

              <div className="lg:col-span-1 col-span-2 lg:w-auto w-full">
                <label htmlFor="twelfthPassingYear" className="block">
                  Chemistry
                </label>
                <input
                  type="text"
                  id="twelfthPassingYear"
                  name="twelfthPassingYear"
                  display-message="Twelfth Passing Year"
                  placeholder="Mark"
                  // onChange={handleChange}
                  className="text-md p-2 rounded-md outline-none lg:w-[95%] w-full border-2 border-gray-200 focus:bg-gray-200"
                />
              </div>

              {/* Maths */}

              <div className="lg:col-span-1 col-span-2 lg:w-auto w-full">
                <label htmlFor="twelfthPassingYear" className="block">
                  Maths
                </label>
                <input
                  type="text"
                  id="twelfthPassingYear"
                  name="twelfthPassingYear"
                  display-message="Twelfth Passing Year"
                  placeholder="Mark"
                  // onChange={handleChange}
                  className="text-md p-2 rounded-md outline-none lg:w-[95%] w-full border-2 border-gray-200 focus:bg-gray-200"
                />
              </div>

              {/* computer science or biology */}

              <div className="lg:col-span-1 col-span-2 lg:w-auto w-full">
                <label htmlFor="twelfthPassingYear" className="block">
                  Biology or Computer Science
                </label>
                <input
                  type="text"
                  id="twelfthPassingYear"
                  name="twelfthPassingYear"
                  display-message="Twelfth Passing Year"
                  placeholder="Mark"
                  // onChange={handleChange}
                  className="text-md p-2 rounded-md outline-none lg:w-[95%] w-full border-2 border-gray-200 focus:bg-gray-200"
                />
              </div>

              {/* English */}

              <div className="lg:col-span-1 col-span-2 lg:w-auto w-full">
                <label htmlFor="twelfthPassingYear" className="block">
                  English
                </label>
                <input
                  type="text"
                  id="twelfthPassingYear"
                  name="twelfthPassingYear"
                  display-message="Twelfth Passing Year"
                  placeholder="Mark"
                  // onChange={handleChange}
                  className="text-md p-2 rounded-md outline-none lg:w-[95%] w-full border-2 border-gray-200 focus:bg-gray-200"
                />
              </div>

              {/* Language */}

              <div className="lg:col-span-1 col-span-2 lg:w-auto w-full">
                <label htmlFor="twelfthPassingYear" className="block">
                  Tamil or French
                </label>
                <input
                  type="text"
                  id="twelfthPassingYear"
                  name="twelfthPassingYear"
                  display-message="Twelfth Passing Year"
                  placeholder="Mark"
                  // onChange={handleChange}
                  className="text-md p-2 rounded-md outline-none lg:w-[95%] w-full border-2 border-gray-200 focus:bg-gray-200"
                />
              </div>

              {/* Cutoff */}

              <div className="lg:col-span-1 col-span-2 lg:w-auto w-full">
                <label htmlFor="twelfthPassingYear" className="block">
                  Cutoff
                </label>
                <input
                  type="text"
                  id="twelfthPassingYear"
                  name="twelfthPassingYear"
                  display-message="Twelfth Passing Year"
                  placeholder="Number"
                  // onChange={handleChange}
                  className="text-md p-2 rounded-md outline-none lg:w-[95%] w-full border-2 border-gray-200 focus:bg-gray-200"
                />
              </div>


              <div className="lg:col-span-1 col-span-2 lg:w-auto w-full">
                <label htmlFor="twelfthPassingYear" className="block">
                  Passing Year
                </label>
                <input
                  type="text"
                  id="twelfthPassingYear"
                  name="twelfthPassingYear"
                  display-message="Twelfth Passing Year"
                  placeholder="12th Passing Year"
                  // onChange={handleChange}
                  className="text-md p-2 rounded-md outline-none lg:w-[95%] w-full border-2 border-gray-200 focus:bg-gray-200"
                />
              </div>
              <div className="lg:col-span-1 col-span-2 lg:w-auto w-full">
                <label htmlFor="twelfthPercentage" className="block">
                  Total
                </label>
                <input
                  type="text"
                  id="twelfthPercentage"
                  name="twelfthPercentage"
                  display-message="Twelfth Percentage"
                  placeholder="Mark"
                  // onChange={handleChange}
                  className="text-md p-2 rounded-md outline-none lg:w-[95%] w-full border-2 border-gray-200 focus:bg-gray-200"
                />
              </div>
            </fieldset>
            <div className="flex flex-col md:flex-row w-full gap-2 py-2">
              <div className="md:w-1/2 w-full ">
                <button
                  type="button"
                  className="tracking-wide font-semibold bg-blue-500 text-gray-100 w-full py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  onClick={handlePrevious}
                >
                  Previous
                </button>
              </div>
              <div className="md:w-1/2 w-full ">
                <button
                  ref={buttonRef}
                  type="submit"
                  className="tracking-wide font-semibold bg-blue-500 text-gray-100 w-full py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default EducationalDetail;
