'use client';

type SimpleMapProps = {
  location: string;
};

export default function SimpleMap(props: SimpleMapProps) {
  return (
    <iframe
      width="100%"
      height="450"
      style={{ border: 0 }}
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      src={`https://www.google.com/maps?q=${props.location}&output=embed`}
    ></iframe>
  );
}
