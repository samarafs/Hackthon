"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { SubmitHandler, ValidationRule, useForm } from "react-hook-form";
import CheckOutSteps from "@/components/checkout/CheckOutSteps";
import useCartService from "@/hooks/store/useCartStore";
import { ShippingAddressType } from "@/utiles/types/order/shippingAddressType";

const ShippingForm = () => {
  const router = useRouter();
  const { saveShipppingAddress, shippingAddress } = useCartService();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ShippingAddressType>({
    defaultValues: {
      fullName: "",
      address: "",
      city: "",
      postalCode: "",
      country: "",
    },
  });

  useEffect(() => {
    setValue("fullName", shippingAddress.fullName);
    setValue("address", shippingAddress.address);
    setValue("city", shippingAddress.city);
    setValue("postalCode", shippingAddress.postalCode);
    setValue("country", shippingAddress.country);
  }, [setValue, shippingAddress]);

  const formSubmit: SubmitHandler<ShippingAddressType> = async (form) => {
    saveShipppingAddress(form);
    router.push("/payment");
  };

  const FormInput = ({
    id,
    name,
    required,
    pattern,
  }: {
    id: keyof ShippingAddressType;
    name: string;
    required?: boolean;
    pattern?: ValidationRule<RegExp>;
  }) => (
    <div className="mb-2">
      <label className="label" htmlFor={id}>
        {name}
      </label>
      <input
        type="text"
        id={id}
        {...register(id, {
          required: required && `${name} is required`,
          pattern,
        })}
        className="input input-bordered w-full max-w-sm"
      />
      {errors[id]?.message && (
        <div className="text-error">{errors[id]?.message}</div>
      )}
    </div>
  );

  return (
    <div className="pt-20">
      <CheckOutSteps current={1} />
      <div className="max-w-sm mx-auto card bg-base-300 my-4 ">
        <div className="card-body ">
          <h1 className="card-title">Shipping Address</h1>
          <form onSubmit={handleSubmit(formSubmit)}>
            <FormInput name="Full Name" id="fullName" required />
            <FormInput name="Address" id="address" required />
            <FormInput name="City" id="city" required />
            <FormInput name="Postal Code" id="postalCode" required />
            <FormInput name="Country" id="country" required />
            <div className="my-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary w-full"
              >
                {isSubmitting && (
                  <span className="loading loading-spinner"></span>
                )}
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ShippingForm;
