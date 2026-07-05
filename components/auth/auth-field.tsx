export function AuthField({
  label,
  name,
  type,
  autoComplete,
}: {
  label: string;
  name: string;
  type: string;
  autoComplete: string;
}) {
  return (
    <label className="block">
      <span className="text-xs font-medium uppercase tracking-wider text-stone-500 dark:text-stone-400">
        {label}
      </span>
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        required
        className="mt-2 w-full border-0 border-b-2 border-stone-200 bg-transparent px-0 py-2 text-stone-900 outline-none transition-colors focus:border-stone-900 dark:border-stone-700 dark:text-stone-50 dark:focus:border-stone-50"
      />
    </label>
  );
}
