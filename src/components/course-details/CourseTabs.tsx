import type { CourseTab } from "@/data/courseDetails";

const tabs: { label: string; value: CourseTab }[] = [
  { label: "About", value: "about" },
  { label: "Lesson", value: "lessons" },
  { label: "Reviews", value: "reviews" },
];

type CourseTabsProps = {
  activeTab: CourseTab;
  onChange: (tab: CourseTab) => void;
};

export function CourseTabs({ activeTab, onChange }: CourseTabsProps) {
  return (
    <div aria-label="Course information" className="flex flex-wrap gap-4" role="tablist">
      {tabs.map((tab) => {
        const active = activeTab === tab.value;

        return (
          <button
            aria-selected={active}
            className={`h-10 rounded-full px-4 text-label-s transition-colors ${
              active
                ? "bg-electric-lime-400 font-medium text-shuttle-gray-950"
                : "bg-shuttle-gray-50 text-shuttle-gray-700 hover:bg-shuttle-gray-100"
            }`}
            key={tab.value}
            onClick={() => onChange(tab.value)}
            role="tab"
            type="button"
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
