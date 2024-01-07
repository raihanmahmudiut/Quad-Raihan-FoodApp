import { Formik, Form, Field } from "formik";

function AddMoreForm({ onSubmit }) {
	return (
		<Formik
			initialValues={{
				Id: "",
				Name: "",
				Price: "",
				ImageUrl: "",
			}}
			onSubmit={(values, actions) => {
				onSubmit(values);
				actions.resetForm();
			}}
		>
			{({ isSubmitting }) => (
				<Form className="bg-white p-4 rounded shadow-lg space-y-4">
					<Field
						type="text"
						name="Id"
						placeholder="Item Id"
						className="w-full p-2 border rounded"
					/>
					<Field
						type="text"
						name="Name"
						placeholder="Item Name"
						className="w-full p-2 border rounded"
					/>
					<Field
						type="text"
						name="Price"
						placeholder="Item Price"
						className="w-full p-2 border rounded"
					/>
					<Field
						type="text"
						name="ImageUrl"
						placeholder="Image URL"
						className="w-full p-2 border rounded"
					/>
					<button
						type="submit"
						disabled={isSubmitting}
						className="w-full p-2 bg-[#fe5b3e] text-white rounded"
					>
						Add Item
					</button>
				</Form>
			)}
		</Formik>
	);
}

export default AddMoreForm;
