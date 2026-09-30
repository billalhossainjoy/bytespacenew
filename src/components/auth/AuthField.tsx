type AuthFieldProps = {
  autoComplete: string;
  label: string;
  minLength?: number;
  name: string;
  placeholder: string;
  type: "email" | "password" | "text";
};

export function AuthField({
  autoComplete,
  label,
  minLength,
  name,
  placeholder,
  type,
}: AuthFieldProps) {
  return (
    <label className="block text-label-s text-shuttle-gray-950">
      <span className="block">{label}</span>
      <input
        autoComplete={autoComplete}
        className="mt-2 h-[52px] w-full rounded-xl border border-shuttle-gray-100 bg-white px-6 text-body-s text-shuttle-gray-950 outline-none transition-colors placeholder:text-shuttle-gray-400 focus:border-persian-blue-800"
        minLength={minLength}
        name={name}
        placeholder={placeholder}
        required
        type={type}
      />
    </label>
  );
}
