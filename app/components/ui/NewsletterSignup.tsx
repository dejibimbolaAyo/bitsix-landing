const newsletterUrl =
  "https://zcsub-cmpzourl.maillist-manage.com/ua/Optin?od=11287ecdb8b815&zx=138870725&tD=1181957312a23ef71&sD=1181957312a23f089";

export default function NewsletterSignup() {
  return (
    <>
      <iframe
        src={newsletterUrl}
        title="BitSix newsletter signup"
        loading="lazy"
        className="h-72 w-full rounded-lg border-0"
      />
      <a href="https://zc.vg/qTN2z" className="inline-block text-sm underline">
        Open signup form in Zoho
      </a>
    </>
  );
}
