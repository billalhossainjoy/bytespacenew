"use client";

import { useState } from "react";

const initialFollowerCount = 12;

export function CreatorFollowControls() {
  const [following, setFollowing] = useState(false);
  const followerCount = initialFollowerCount + (following ? 1 : 0);

  return (
    <>
      <span
        aria-live="polite"
        className="rounded-full bg-white px-5 py-3 text-label-m text-shuttle-gray-950"
      >
        <strong className="mr-2 font-medium text-persian-blue-800">
          {followerCount}
        </strong>
        Followers
      </span>
      <button
        aria-pressed={following}
        className="ml-auto rounded-full bg-electric-lime-400 px-6 py-3 text-label-m font-medium text-shuttle-gray-950 transition-transform hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        onClick={() => setFollowing((current) => !current)}
        type="button"
      >
        {following ? "Following" : "Follow"}
      </button>
    </>
  );
}
