import React from "react";

export default function Services() {
  return (
    <div>
      <h2 className="text-center text-4xl font-semibold text-[#483B3B] font-montserrat my-12 lg:my-20">
        Our Services
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-8 ">
        <div
          className="rounded-lg flex flex-col items-center justify-center px-12 py-20  gap-4 text-white"
          style={{
            background: "linear-gradient(180deg, #FF5858 0%, #FA7070 100%)",
            boxShadow: "30px 30px 30px rgba(0, 0, 0, 0.1)",
          }}
        >
          <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22 49.5V52.8567C22.0002 54.1703 21.7415 55.4712 21.2387 56.6848C20.736 57.8985 19.999 59.0012 19.07 59.93L17 62H47L44.93 59.93C44.0009 59.0012 43.264 57.8985 42.7613 56.6848C42.2585 55.4712 41.9998 54.1703 42 52.8567V49.5M62 9.5V42C62 43.9891 61.2098 45.8968 59.8033 47.3033C58.3968 48.7098 56.4891 49.5 54.5 49.5H9.5C7.51088 49.5 5.60322 48.7098 4.1967 47.3033C2.79018 45.8968 2 43.9891 2 42V9.5M62 9.5C62 7.51088 61.2098 5.60322 59.8033 4.1967C58.3968 2.79018 56.4891 2 54.5 2H9.5C7.51088 2 5.60322 2.79018 4.1967 4.1967C2.79018 5.60322 2 7.51088 2 9.5M62 9.5V32C62 33.9891 61.2098 35.8968 59.8033 37.3033C58.3968 38.7098 56.4891 39.5 54.5 39.5H9.5C7.51088 39.5 5.60322 38.7098 4.1967 37.3033C2.79018 35.8968 2 33.9891 2 32V9.5"
              stroke="white"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <h3 className="font-montserrat text-xl font-semibold text-center">
            IT & Consultancy
          </h3>
          <p className="text-center text-lg ">
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry'ss
          </p>
        </div>
        <div
          className="rounded-lg flex flex-col items-center justify-center px-12 py-20  gap-4 text-white"
          style={{
            background: "linear-gradient(180deg, #FF5858 0%, #FA7070 100%)",
            boxShadow: "30px 30px 30px rgba(0, 0, 0, 0.1)",
          }}
        >
          <svg
            width="54"
            height="63"
            viewBox="0 0 54 63"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M52 14.4808C52 21.3732 40.8061 26.9615 27 26.9615C13.1939 26.9615 2 21.3732 2 14.4808M52 14.4808C52 7.58836 40.8061 2 27 2C13.1939 2 2 7.58836 2 14.4808M52 14.4808V48.5192C52 55.4116 40.8061 61 27 61C13.1939 61 2 55.4116 2 48.5192V14.4808M52 14.4808V25.8269M2 14.4808V25.8269M52 25.8269V37.1731C52 44.0655 40.8061 49.6538 27 49.6538C13.1939 49.6538 2 44.0655 2 37.1731V25.8269M52 25.8269C52 32.7193 40.8061 38.3077 27 38.3077C13.1939 38.3077 2 32.7193 2 25.8269"
              stroke="white"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <h3 className="font-montserrat text-xl font-semibold text-center">
            Management
          </h3>
          <p className="text-center text-lg ">
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's
          </p>
        </div>
        <div
          className="rounded-lg flex flex-col items-center justify-center px-12 py-20  gap-4 text-white"
          style={{
            background: "linear-gradient(180deg, #FF5858 0%, #FA7070 100%)",
            boxShadow: "30px 30px 30px rgba(0, 0, 0, 0.1)",
          }}
        >
          <svg
            width="51"
            height="65"
            viewBox="0 0 51 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.8 55.9615H30.2M9.05 63H41.95C43.8198 63 45.613 62.2584 46.9351 60.9385C48.2572 59.6185 49 57.8283 49 55.9615V9.03846C49 7.17175 48.2572 5.38148 46.9351 4.06152C45.613 2.74155 43.8198 2 41.95 2H9.05C7.18022 2 5.38703 2.74155 4.0649 4.06152C2.74277 5.38148 2 7.17175 2 9.03846V55.9615C2 57.8283 2.74277 59.6185 4.0649 60.9385C5.38703 62.2584 7.18022 63 9.05 63Z"
              stroke="white"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <h3 className="font-montserrat text-xl font-semibold text-center">
            Software Development
          </h3>
          <p className="text-center text-lg ">
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's
          </p>
        </div>
        <div
          className="rounded-lg flex flex-col items-center justify-center px-12 py-20  gap-4 text-white"
          style={{
            background: "linear-gradient(180deg, #FF5858 0%, #FA7070 100%)",
            boxShadow: "30px 30px 30px rgba(0, 0, 0, 0.1)",
          }}
        >
          <svg
            width="64"
            height="60"
            viewBox="0 0 64 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 16H62M2 18.8H62M11.2308 38.4H29.6923M11.2308 46.8H20.4615M8.92308 58H55.0769C56.913 58 58.6739 57.115 59.9723 55.5397C61.2706 53.9644 62 51.8278 62 49.6V10.4C62 8.17218 61.2706 6.03561 59.9723 4.4603C58.6739 2.885 56.913 2 55.0769 2H8.92308C7.08696 2 5.32605 2.885 4.02772 4.4603C2.72939 6.03561 2 8.17218 2 10.4V49.6C2 51.8278 2.72939 53.9644 4.02772 55.5397C5.32605 57.115 7.08696 58 8.92308 58Z"
              stroke="white"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <h3 className="font-montserrat text-xl font-semibold text-center">
            Strategic Consultancy
          </h3>
          <p className="text-center text-lg ">
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's
          </p>
        </div>
        <div
          className="rounded-lg flex flex-col items-center justify-center px-12 py-20  gap-4 text-white"
          style={{
            background: "linear-gradient(180deg, #FF5858 0%, #FA7070 100%)",
            boxShadow: "30px 30px 30px rgba(0, 0, 0, 0.1)",
          }}
        >
          <svg
            width="59"
            height="59"
            viewBox="0 0 59 59"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M42.6613 8.56251L47.6098 3.6111C48.6414 2.57953 50.0405 2 51.4993 2C52.9582 2 54.3573 2.57953 55.3889 3.6111C56.4205 4.64268 57 6.04179 57 7.50065C57 8.95952 56.4205 10.3586 55.3889 11.3902L24.2402 42.5389C22.6895 44.0887 20.7771 45.2279 18.6758 45.8535L10.7999 48.2001L13.1465 40.3242C13.7721 38.2229 14.9113 36.3105 16.4611 34.7598L42.6613 8.56251ZM42.6613 8.56251L50.3994 16.3005M45.9994 36.4669V50.4001C45.9994 52.1505 45.3041 53.8292 44.0663 55.0669C42.8286 56.3047 41.1499 57 39.3995 57H8.59991C6.84951 57 5.17079 56.3047 3.93307 55.0669C2.69535 53.8292 2 52.1505 2 50.4001V19.6005C2 17.8501 2.69535 16.1714 3.93307 14.9336C5.17079 13.6959 6.84951 13.0006 8.59991 13.0006H22.5331"
              stroke="white"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <h3 className="font-montserrat text-xl font-semibold text-center">
            Training & Skill Development
          </h3>
          <p className="text-center text-lg ">
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's
          </p>
        </div>
        <div
          className="rounded-lg flex flex-col items-center justify-center px-12 py-20  gap-4 text-white"
          style={{
            background: "linear-gradient(180deg, #FF5858 0%, #FA7070 100%)",
            boxShadow: "30px 30px 30px rgba(0, 0, 0, 0.1)",
          }}
        >
          <svg
            width="63"
            height="63"
            viewBox="0 0 63 63"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26.5833 11.8333C21.7212 11.8333 16.9683 13.2751 12.9256 15.9764C8.88287 18.6776 5.73196 22.517 3.87131 27.009C2.01065 31.501 1.52382 36.4439 2.47237 41.2126C3.42093 45.9813 5.76226 50.3617 9.2003 53.7997C12.6383 57.2377 17.0187 59.5791 21.7874 60.5276C26.5561 61.4762 31.499 60.9893 35.991 59.1287C40.483 57.268 44.3224 54.1171 47.0236 50.0744C49.7249 46.0317 51.1667 41.2788 51.1667 36.4167H26.5833V11.8333Z"
              stroke="white"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M36.4166 26.5833H61C61 20.0634 58.4099 13.8106 53.7997 9.20029C49.1894 4.59002 42.9365 2 36.4166 2V26.5833Z"
              stroke="white"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <h3 className="font-montserrat text-xl font-semibold text-center">
            AI & Data Analysis
          </h3>
          <p className="text-center text-lg ">
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's
          </p>
        </div>
      </div>
    </div>
  );
}
