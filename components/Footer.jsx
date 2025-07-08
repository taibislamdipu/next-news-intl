import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16 py-8">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm text-gray-600">
          © 2025{" "}
          <Link
            href="https://learnwithsumit.com/"
            target="_blank"
            title="Learn with Sumit"
            className="text-gray-600 hover:underline"
          >
            Learn with Sumit
          </Link>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
}
