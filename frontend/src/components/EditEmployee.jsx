import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router";
import axios from "axios";

function EditEmployee() {
  const { register, handleSubmit, setValue } = useForm();
  const { state } = useLocation();
  const navigate = useNavigate();

  // Set existing employee data into form
  useEffect(() => {
    if (state) {
      setValue("_id", state._id); // important for update
      setValue("name", state.name);
      setValue("email", state.email);
      setValue("mobile", state.mobile);
      setValue("designation", state.designation);
      setValue("companyName", state.companyName);
    }
  }, [state, setValue]);

  // Update employee
  const saveModifiedEmp = async (modifiedEmp) => {
    try {
      const res = await axios.put(
        `http://employeemanagement-2-9rwq.onrender.com/emp-api/employees/${modifiedEmp._id}`,
        modifiedEmp
      );

      if (res.status === 200) {
        console.log("Employee updated successfully");
        navigate("/list"); // ✅ correct navigation
      }
    } catch (err) {
      console.error("Update failed:", err);
    }
  };

  return (
    <div>
      <h1 className="text-5xl text-center text-gray-600">
        Edit Employee
      </h1>

      <form
        className="max-w-md mx-auto mt-10"
        onSubmit={handleSubmit(saveModifiedEmp)}
      >
        {/* Hidden ID field */}
        <input type="hidden" {...register("_id")} />

        <input
          type="text"
          placeholder="Enter name"
          {...register("name")}
          className="mb-3 border p-3 w-full rounded-2xl"
        />

        <input
          type="email"
          placeholder="Enter Email"
          {...register("email")}
          className="mb-3 border p-3 w-full rounded-2xl"
          disabled
        />

        <input
          type="number"
          placeholder="Enter mobile number"
          {...register("mobile")}
          className="mb-3 border p-3 w-full rounded-2xl"
        />

        <input
          type="text"
          placeholder="Enter designation"
          {...register("designation")}
          className="mb-3 border p-3 w-full rounded-2xl"
        />

        <input
          type="text"
          placeholder="Enter company name"
          {...register("companyName")}
          className="mb-3 border p-3 w-full rounded-2xl"
        />

        <button
          type="submit"
          className="text-2xl rounded-2xl bg-gray-600 text-white block mx-auto p-4"
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default EditEmployee;