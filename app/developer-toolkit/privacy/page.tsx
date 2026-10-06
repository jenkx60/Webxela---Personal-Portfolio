export default function DeveloperToolkitPrivacy() {
    return (
      <main className="min-h-screen px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-sm text-gray-500">
            Developer Toolkit
          </p>
  
          <h1 className="text-4xl font-bold tracking-tight">
            Privacy Policy
          </h1>
  
          <p className="mt-3 text-sm text-gray-500">
            Last updated: October 6, 2026
          </p>
  
          <div className="mt-12 space-y-10 text-gray-700">
            <section>
              <h2 className="text-xl font-semibold text-gray-900">
                Overview
              </h2>
  
              <p className="mt-3 leading-7">
                Developer Toolkit is a Chrome extension that provides
                small developer utilities through the browser context
                menu.
              </p>
            </section>
  
            <section>
              <h2 className="text-xl font-semibold text-gray-900">
                Information the extension accesses
              </h2>
  
              <p className="mt-3 leading-7">
                The extension may access information from the webpage
                currently being viewed when the user uses its developer
                tools.
              </p>
  
              <p className="mt-3 leading-7">
                Depending on the selected tool, this can include:
              </p>
  
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>HTML of a selected element</li>
                <li>Computed CSS styles</li>
                <li>CSS selectors</li>
                <li>Image URLs</li>
                <li>Links present on the current webpage</li>
              </ul>
  
              <p className="mt-3 leading-7">
                This access is required for the extension's core
                functionality.
              </p>
            </section>
  
            <section>
              <h2 className="text-xl font-semibold text-gray-900">
                How information is used
              </h2>
  
              <p className="mt-3 leading-7">
                The information is used only to perform the developer
                action requested by the user, such as copying HTML, CSS,
                a selector, an image URL, or a list of links.
              </p>
            </section>
  
            <section>
              <h2 className="text-xl font-semibold text-gray-900">
                Storage
              </h2>
  
              <p className="mt-3 leading-7">
                Developer Toolkit may store the following information
                locally using Chrome's extension storage:
              </p>
  
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Toolkit enabled/disabled state</li>
                <li>The five most recent copied items</li>
              </ul>
  
              <p className="mt-3 leading-7">
                This information remains in the user's browser and is not
                transmitted to a Developer Toolkit server.
              </p>
            </section>
  
            <section>
              <h2 className="text-xl font-semibold text-gray-900">
                Data sharing
              </h2>
  
              <p className="mt-3 leading-7">
                Developer Toolkit does not sell, rent, or share webpage
                content or copied content with third parties.
              </p>
  
              <p className="mt-3 leading-7">
                The extension does not send webpage information to an
                external server.
              </p>
            </section>
  
            <section>
              <h2 className="text-xl font-semibold text-gray-900">
                Analytics and tracking
              </h2>
  
              <p className="mt-3 leading-7">
                Developer Toolkit does not use third-party analytics,
                advertising trackers, or behavioral tracking.
              </p>
            </section>
  
            <section>
              <h2 className="text-xl font-semibold text-gray-900">
                User control
              </h2>
  
              <p className="mt-3 leading-7">
                Users can disable the toolkit from the extension popup.
              </p>
  
              <p className="mt-3 leading-7">
                When disabled, the extension does not perform its
                developer-tool actions or hover highlighting.
              </p>
  
              <p className="mt-3 leading-7">
                Users can also remove the extension from Chrome at any
                time.
              </p>
            </section>
  
            <section>
              <h2 className="text-xl font-semibold text-gray-900">
                Chrome Web Store Limited Use
              </h2>
  
              <p className="mt-3 leading-7">
                Developer Toolkit's use of information obtained from
                webpages is limited to providing the extension's
                disclosed developer-tool functionality and complies with
                the Chrome Web Store User Data Policy and Limited Use
                requirements.
              </p>
            </section>
  
            <section>
              <h2 className="text-xl font-semibold text-gray-900">
                Contact
              </h2>
  
              <p className="mt-3 leading-7">
                For questions or concerns about this privacy policy,
                please contact the developer through the project's
                GitHub repository.
              </p>
  
              <a
                href="https://github.com/jenkx60"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block underline"
              >
                github.com/jenkx60
              </a>
            </section>
          </div>
        </div>
      </main>
    );
  }