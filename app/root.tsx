// ╔════════════════════════════════════════════════╗
// - Authors :
//     >> Daniil STEPANOV - { daniil.stepanov@epitech.eu }
//     >> Nathan TIROLF - { nathan.tirolf@epitech.eu }
// ╚════════════════════════════════════════════════╝

/* ----- IMPORTS ----- */
import { isRouteErrorResponse, Links, Meta, Navigate, Outlet, Scripts, ScrollRestoration } from "react-router";
import type { Route } from "./+types/root";
import { AppSidebar } from "./components/custom/Layout/Navigation/Navigation";
import "./i18n";
import "./app.css";
import "./styles/colors.css";
import "./styles/texts.css";
import "./styles/responsive.css";

/* ----- DATAS ----- */
export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <AppSidebar />
        {/* Zenchef SDK Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              ;(function (d, s, id) {
                const el = d.getElementsByTagName(s)[0]
                if (d.getElementById(id) || el.parentNode == null) return
                var js = d.createElement(s)
                js.id = id
                js.src = 'https://sdk.zenchef.com/v1/sdk.min.js'
                el.parentNode.insertBefore(js, el)
              })(document, 'script', 'zenchef-sdk')
            `,
          }}
        />

        {/* Zenchef Widget Config */}
        <div className="zc-widget-config" data-restaurant="376858" data-open="2000" />

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <>
      <AppSidebar />
      <Outlet />
    </>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
