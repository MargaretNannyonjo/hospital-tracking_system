import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

export const AdmissionForm = () => {
  const schema = yup.object().shape({
    patientNumber: yup.number().positive().required("This field is required"),
    fullName: yup.string().required("This field is required"),
    dateOfBirth: yup
      .date()
      .max(new Date())
      .transform((originalValue, originalObject) => {
        return originalValue instanceof Date
          ? originalValue.toISOString().split("T")[0]
          : originalValue;
      })
      .required("This field is required"),
    occupation: yup.string(),
    age: yup.number().positive().required("This field is required"),
    weight: yup.number().positive().required("This field is required"),
    height: yup.number().positive(),
    address: yup.string().required("This field is required"),
    phoneNumber: yup.number().positive().required("This field is required"),
    nextOfKin: yup.string().required("This field is required"),
    emergencyContact: yup
      .number()
      .positive()

      .required("This field is required"),
    previousIllnesses: yup.string(),
    allergies: yup.string(),
    currentTreatment: yup.string(),
    diagnosis: yup.string(),
    healthcareProvider: yup.string().required("This field is reqired"),
    cadre: yup.string().required("This field is reqired"),
    date: yup
      .date()
      .max(new Date())
      .transform((originalValue, originalObject) => {
        return originalValue instanceof Date
          ? originalValue.toISOString().split("T")[0]
          : originalValue;
      }),
    condition: yup.string().required("This field is reqired"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="AdmissionForm">
      <h1>ADMISSION FORM</h1>

      <div className="PatientId">
        <input
          type="text"
          placeholder="Date"
          {...register("date")}
          style={{ padding: ".5rem", fontSize: "1rem" }}
        />
        <input
          type="text"
          placeholder="Patient Number"
          {...register("patientNumber")}
          style={{ padding: ".5rem", fontSize: "1rem" }}
        />
        <p style={{ color: "red", fontSize: "small" }}>
          {errors.patientNumber?.message}
        </p>
      </div>

      <div className="Emergency">
        <label>
          Emergency
          <input type="checkbox" />
        </label>

        <label>
          Out Patient
          <input type="checkbox" />
        </label>

        <label>
          In Patient
          <input type="checkbox" />
        </label>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <p>Patient's Information</p>
        <div className="PatientInfo">
          <input
            type="text"
            placeholder="Full Name"
            {...register("fullName")}
          />
          <p style={{ color: "red", fontSize: "small" }}>
            {errors.fullName?.message}
          </p>

          <input
            type="text"
            placeholder="Date of Birth"
            {...register("dateOfBirth")}
          />
          <p style={{ color: "red", fontSize: "small" }}>
            {errors.dateOfBirth?.message}
          </p>

          <input type="number" placeholder="Age" {...register("age")} />
          <p style={{ color: "red", fontSize: "small" }}>
            {errors.age?.message}
          </p>

          <input type="number" placeholder="Weight" {...register("weight")} />
          <p style={{ color: "red", fontSize: "small" }}>
            {errors.weight?.message}
          </p>

          <input type="number" placeholder="Height" {...register("height")} />
          <p style={{ color: "red", fontSize: "small" }}>
            {errors.height?.message}
          </p>

          <input
            type="text"
            placeholder="Occupation"
            {...register("occupation")}
          />
        </div>

        <div className="Gender">
          <p>Gender</p>
          <label>
            Male
            <input type="checkbox" />
          </label>

          <label>
            Female
            <input type="checkbox" />
          </label>

          <p>Marital Status</p>
          <label>
            Single
            <input type="checkbox" />
          </label>

          <label>
            Married
            <input type="checkbox" />
          </label>

          <label>
            Widow
            <input type="checkbox" />
          </label>
        </div>

        <p>Contact Information</p>
        <div className="ContactInfo">
          <input type="text" placeholder="Address" {...register("address")} />
          <p style={{ color: "red", fontSize: "small" }}>
            {errors.address?.message}
          </p>

          <input
            type="text"
            placeholder="Phone Number"
            {...register("phoneNumber")}
          />
          <p style={{ color: "red", fontSize: "small" }}>
            {errors.phoneNumber?.message}
          </p>

          <input
            type="text"
            placeholder="Next of Kin"
            {...register("nextOfKin")}
          />
          <p style={{ color: "red", fontSize: "small" }}>
            {errors.nextOfKin?.message}
          </p>

          <input
            type="text"
            placeholder="Phone Number(Next of Kin)"
            {...register("emergencyContact")}
          />
          <p style={{ color: "red", fontSize: "small" }}>
            {errors.emergencyContact?.message}
          </p>
        </div>

        <p>Medical History</p>
        <div className="MedicalHistory">
          <input
            type="text"
            placeholder="Previous Illnesses"
            {...register("previousIllnesse")}
          />

          <input
            type="text"
            placeholder="Allergies"
            {...register("allergies")}
          />

          <input
            type="text"
            placeholder="Current Treatment"
            {...register("currentTreatment")}
          />
        </div>

        <p>Reasons for Admission</p>
        <div className="ReasonsforAdmission">
          <input placeholder="Signs and Symptoms" {...register("signs")} />

          <input
            type="text"
            placeholder="Diagnosis"
            {...register("diagnosis")}
          />

          <input
            type="text"
            placeholder="Patient's General Condition"
            {...register("condition")}
          />
          <p style={{ color: "red", fontSize: "small" }}>
            {errors.condition?.message}
          </p>
        </div>

        <p>Healthcare Provider</p>

        <div className="CareProvider">
          <input
            type="text"
            placeholder="Name"
            {...register("healthcareProvider")}
          />
          <p style={{ color: "red", fontSize: "small" }}>
            {errors.healthcareProvider?.message}
          </p>

          <input type="text" placeholder="cadre" {...register("cadre")} />
          <p style={{ color: "red", fontSize: "small" }}>
            {errors.cadre?.message}
          </p>

          <input type="text" placeholder="date" {...register("date")} />
          <p style={{ color: "red", fontSize: "small" }}>
            {errors.date?.message}
          </p>
        </div>

        <input type="submit" style={{ cursor: "pointer" }} />
      </form>
    </div>
  );
};
