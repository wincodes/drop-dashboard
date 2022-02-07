export default [
  {
    svg: `<svg
      width="89"
      height="89"
      viewBox="0 0 89 89"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.5 17L17.5 72" stroke="#8F92A1" />
      <line x1="72" y1="72" x2="17" y2="72" stroke="#8F92A1" />
      <path
        d="M10 0.5H79C84.2467 0.5 88.5 4.75329 88.5 10V79C88.5 84.2467 84.2467 88.5 79 88.5H10C4.75329 88.5 0.5 84.2467 0.5 79V10C0.5 4.75329 4.75329 0.5 10 0.5Z"
        stroke="#E2E2EA"
      />
      <path
        d="M27 63L32.5714 48.2L38.1429 54.5429L48.8571 31.8143L58.2857 39.2143L66 26"
        stroke="#EEAC4B"
        stroke-width="2"
      />
      <path
        d="M25 52.5L41.8806 64L52.3582 49L64 56.5"
        stroke="#BB5935"
        stroke-width="2"
      />
    </svg>`,
    backgroundColor1: "#EEAC4B",
    backgroundColor2: "#BB5935",
    chart: "line",
    data: {
      labels: ["1 Oct", "8 Oct", "15 Oct", "20 Oct", "24 Oct", "28 Oct"],
      datasets: [
        {
          id: 1,
          label: "",
          type: "line",
          data: [900, 1100, 100, 1400, 1800, 1550],
          pointRadius: 0,
          backgroundColor: "#EEAC4B",
          borderWidth: 3,
          borderColor: "#EEAC4B",
        },
        {
          id: 2,
          label: "",
          type: "line",
          data: [1400, 1100, 700, 700, 1400, 1450],
          pointRadius: 0,
          backgroundColor: "#BB5935",
          borderWidth: 3,
          borderColor: "#BB5935",
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          display: true,
          grid: {
            display: false,
          },
          ticks: {
            color: "#8F92A1",
          },
        },

        y: {
          display: true,
          grid: {
            display: true,
            zeroLineColor: "transparent",
            drawBorder: false,
            borderDash: [3, 3],
          },
          ticks: {
            color: "#8F92A1",
            callback: function (value: string) {
              return value;
            },
          },
        },
      },
    },
  },
  {
    svg: `<svg
    width="89"
    height="89"
    viewBox="0 0 89 89"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="24" y="38" width="9" height="34" fill="#E58645" />
    <rect x="39" y="51" width="9" height="21" fill="#BB5935" />
    <rect x="54" y="27" width="9" height="45" fill="#DC6041" />
    <path d="M17.5 17L17.5 72" stroke="#8F92A1" />
    <line x1="72" y1="72" x2="17" y2="72" stroke="#8F92A1" />
    <path
      d="M0.5 10C0.5 4.75329 4.75329 0.5 10 0.5H79C84.2467 0.5 88.5 4.75329 88.5 10V79C88.5 84.2467 84.2467 88.5 79 88.5H10C4.75329 88.5 0.5 84.2467 0.5 79V10Z"
      stroke="#E2E2EA"
    />
  </svg>`,
    backgroundColor1: "#EEAC4B",
    backgroundColor2: "#BB5935",
    chart: "bar",
    data: {
      labels: ["1 Oct", "8 Oct", "15 Oct", "20 Oct", "24 Oct", "28 Oct"],
      datasets: [
        {
          id: 1,
          label: "",
          type: "bar",
          data: [900, 1100, 100, 1400, 1800, 1550],
          hoverOffset: 4,
          backgroundColor: "#EEAC4B",
          borderWidth: 3,
          borderColor: "#EEAC4B",
        },
        {
          id: 2,
          label: "",
          type: "bar",
          data: [1400, 1100, 700, 700, 1400, 1450],
          backgroundColor: "#BB5935",
          borderWidth: 3,
          borderColor: "#BB5935",
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          display: true,
          grid: {
            display: false,
          },
          ticks: {
            color: "#8F92A1",
          },
        },

        y: {
          display: true,
          grid: {
            display: true,
            zeroLineColor: "transparent",
            drawBorder: false,
            borderDash: [3, 3],
          },
          ticks: {
            color: "#8F92A1",
            callback: function (value: string) {
              return value;
            },
          },
        },
      },
    },
  },
  {
    svg: `<svg
  width="89"
  height="89"
  viewBox="0 0 89 89"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M10 0.5H79C84.2467 0.5 88.5 4.75329 88.5 10V79C88.5 84.2467 84.2467 88.5 79 88.5H10C4.75329 88.5 0.5 84.2467 0.5 79V10C0.5 4.75329 4.75329 0.5 10 0.5Z"
    stroke="#E2E2EA"
  />
  <circle
    cx="44.5"
    cy="44.5"
    r="22.5"
    stroke="#EEAC4B"
    stroke-width="13"
  />
  <path
    d="M44.6271 22C34.9505 22 26.7473 27.9855 23.4957 36.4786C22.529 39.0036 22 41.7502 22 44.6271"
    stroke="#DC6041"
    stroke-width="13"
  />
  <path
    d="M31.18 62.6237C34.9322 65.3711 39.5792 67 44.6271 67C56.9264 67 67 56.9264 67 44.6271C67 32.0736 56.9264 22 44.6271 22"
    stroke="#EEAC4B"
    stroke-width="13"
  />
  <path
    d="M67.0003 44.6271C67.0003 38.0529 64.2376 32.1588 59.8392 28.0355C55.8389 24.2853 50.4856 22 44.6274 22"
    stroke="#DC6041"
    stroke-width="13"
  />
</svg>`,

    backgroundColor1: "#EEAC4B",
    backgroundColor2: "#BB5935",
    chart: "doughnut",
    data: {
      labels: ["1 Oct", "8 Oct", "15 Oct", "20 Oct", "24 Oct", "28 Oct"],
      datasets: [
        {
          id: 1,
          label: "",
          data: [900, 1100, 100, 1400, 1800, 1550],
          hoverOffset: 4,
          //   backgroundColor: ["#EEAC4B"],
          backgroundColor: [900, 1100, 100, 1400, 1800, 1550].map((item, i) => {
            return i % 2 === 0 ? "#EEAC4B" : "#BB5935";
          }),
          borderColor: [900, 1100, 100, 1400, 1800, 1550].map((item, i) => {
            return i % 2 === 0 ? "#EEAC4B" : "#BB5935";
          }),
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          display: true,
          grid: {
            display: false,
          },
          ticks: {
            color: "#8F92A1",
          },
        },

        y: {
          display: true,
          grid: {
            display: true,
            zeroLineColor: "transparent",
            drawBorder: false,
            borderDash: [3, 3],
          },
          ticks: {
            color: "#8F92A1",
            callback: function (value: string) {
              return value;
            },
          },
        },
      },
    },
  },
  {
    svg: `<svg
width="89"
height="89"
viewBox="0 0 89 89"
fill="none"
xmlns="http://www.w3.org/2000/svg"
>
<path
  d="M10 0.5H79C84.2467 0.5 88.5 4.75329 88.5 10V79C88.5 84.2467 84.2467 88.5 79 88.5H10C4.75329 88.5 0.5 84.2467 0.5 79V10C0.5 4.75329 4.75329 0.5 10 0.5Z"
  stroke="#E2E2EA"
/>
<circle
  cx="43.9999"
  cy="44"
  r="14.9999"
  transform="rotate(-90 43.9999 44)"
  stroke="#EEAC4B"
  stroke-width="30"
/>
<path
  d="M29 43.9153C29 50.3663 32.9903 55.8351 38.6524 58.0028C40.3357 58.6472 42.1668 58.9999 44.0847 58.9999"
  stroke="#DC6041"
  stroke-width="30"
/>
<path
  d="M56.0823 52.88C57.914 50.3785 58.9999 47.2805 58.9999 43.9153C58.9999 35.7158 52.2842 29.0001 44.0847 29.0001C35.7157 29.0001 29 35.7158 29 43.9153"
  stroke="#EEAC4B"
  stroke-width="30"
/>
<path
  d="M58.0368 38.6584C55.8981 33.0303 50.4366 29.0001 44.0847 29.0001C35.7157 29.0001 29 35.7158 29 43.9153"
  stroke="#DC6041"
  stroke-width="30"
/>
<path
  d="M44.0847 29C39.7019 29 35.7725 30.8418 33.0236 33.774C30.5236 36.4409 29 40.0097 29 43.9152"
  stroke="#DC6041"
  stroke-width="30"
/>
</svg>`,

    backgroundColor1: "#EEAC4B",
    backgroundColor2: "#BB5935",
    chart: "pie",
    data: {
      labels: ["1 Oct", "8 Oct", "15 Oct", "20 Oct", "24 Oct", "28 Oct"],
      datasets: [
        {
          id: 1,
          label: "",
          type: "pie",
          data: [900, 1100, 100, 1400, 1800, 1550],
          hoverOffset: 4,
          backgroundColor: [900, 1100, 100, 1400, 1800, 1550].map((item, i) => {
            return i % 2 === 0 ? "#EEAC4B" : "#BB5935";
          }),
          borderColor: [900, 1100, 100, 1400, 1800, 1550].map((item, i) => {
            return i % 2 === 0 ? "#EEAC4B" : "#BB5935";
          }),
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          display: true,
          grid: {
            display: false,
          },
          ticks: {
            color: "#8F92A1",
          },
        },

        y: {
          display: true,
          grid: {
            display: true,
            zeroLineColor: "transparent",
            drawBorder: false,
            borderDash: [3, 3],
          },
          ticks: {
            color: "#8F92A1",
            callback: function (value: string) {
              return value;
            },
          },
        },
      },
    },
  },
  {
    svg: `<svg
width="89"
height="89"
viewBox="0 0 89 89"
fill="none"
xmlns="http://www.w3.org/2000/svg"
>
<path
  d="M0.5 10C0.5 4.75329 4.75329 0.5 10 0.5H79C84.2467 0.5 88.5 4.75329 88.5 10V79C88.5 84.2467 84.2467 88.5 79 88.5H10C4.75329 88.5 0.5 84.2467 0.5 79V10Z"
  stroke="#E2E2EA"
/>
<rect
  x="18"
  y="35"
  width="9"
  height="34"
  transform="rotate(-90 18 35)"
  fill="#E58645"
/>
<rect
  x="18"
  y="50"
  width="9"
  height="21"
  transform="rotate(-90 18 50)"
  fill="#BB5935"
/>
<rect
  x="18"
  y="65"
  width="9"
  height="45"
  transform="rotate(-90 18 65)"
  fill="#DC6041"
/>
<path d="M17.5 17L17.5 72" stroke="#8F92A1" />
<line x1="72" y1="72" x2="17" y2="72" stroke="#8F92A1" />
</svg>`,

    backgroundColor1: "#EEAC4B",
    backgroundColor2: "#BB5935",
    chart: "bar",
    data: {
      labels: ["1 Oct", "8 Oct", "15 Oct", "20 Oct", "24 Oct", "28 Oct"],
      datasets: [
        {
          id: 1,
          label: "",
          type: "bar",
          indexAxis: "y",
          data: [900, 1100, 100, 1400, 1800, 1550],
          backgroundColor: "#EEAC4B",
          borderWidth: 3,
          borderColor: "#EEAC4B",
        },
        {
          id: 2,
          label: "",
          type: "bar",
          indexAxis: "y",
          data: [1400, 1100, 700, 700, 1400, 1450],
          backgroundColor: "#BB5935",
          borderWidth: 3,
          borderColor: "#BB5935",
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          display: false,
        },
      },
      indexAxis: "y",
      scales: {
        x: {
          display: true,
          grid: {
            display: false,
          },
          ticks: {
            color: "#8F92A1",
          },
        },

        y: {
          display: true,
          grid: {
            display: true,
            zeroLineColor: "transparent",
            drawBorder: false,
            borderDash: [3, 3],
          },
          ticks: {
            color: "#8F92A1",
            callback: function (value: string) {
              return value;
            },
          },
        },
      },
    },
  },
  {
    svg: `<svg
width="89"
height="89"
viewBox="0 0 89 89"
fill="none"
xmlns="http://www.w3.org/2000/svg"
>
<path
  d="M0.5 10C0.5 4.75329 4.75329 0.5 10 0.5H79C84.2467 0.5 88.5 4.75329 88.5 10V79C88.5 84.2467 84.2467 88.5 79 88.5H10C4.75329 88.5 0.5 84.2467 0.5 79V10Z"
  stroke="#E2E2EA"
/>
<path d="M17.5 17L17.5 72" stroke="#8F92A1" />
<line x1="72" y1="72" x2="17" y2="72" stroke="#8F92A1" />
<path
  d="M26 63L30.0178 52.327C30.7215 50.4577 33.1635 50.0125 34.4816 51.5131V51.5131C35.7385 52.9441 38.0502 52.618 38.8624 50.8952L45.1877 37.4772C46.5543 34.578 50.2607 33.7007 52.782 35.6796V35.6796C55.1631 37.5483 58.6461 36.884 60.1721 34.27L65 26"
  stroke="#E58645"
  stroke-width="2"
/>
<path
  d="M24 52.5L33.2226 58.7829C37.4664 61.6741 43.2463 60.6132 46.1868 56.4035V56.4035C49.0737 52.2706 54.712 51.1606 58.95 53.8908L63 56.5"
  stroke="#EEAC4B"
  stroke-width="2"
/>
</svg>`,

    backgroundColor1: "#EEAC4B",
    backgroundColor2: "#BB5935",
    chart: "line",
    data: {
      labels: ["1 Oct", "8 Oct", "15 Oct", "20 Oct", "24 Oct", "28 Oct"],
      datasets: [
        {
          id: 1,
          label: "",
          type: "line",
          data: [900, 1100, 100, 1400, 1800, 1550],
          pointRadius: 0,
          lineTension: 0.4,
          radius: 6,
          backgroundColor: "#EEAC4B",
          borderWidth: 3,
          borderColor: "#EEAC4B",
        },
        {
          id: 2,
          label: "",
          type: "line",
          data: [1400, 1100, 700, 700, 1400, 1450],
          pointRadius: 0,
          lineTension: 0.4,
          radius: 6,
          backgroundColor: "#BB5935",
          borderWidth: 3,
          borderColor: "#BB5935",
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          display: true,
          grid: {
            display: false,
          },
          ticks: {
            color: "#8F92A1",
          },
        },

        y: {
          display: true,
          grid: {
            display: true,
            zeroLineColor: "transparent",
            drawBorder: false,
            borderDash: [3, 3],
          },
          ticks: {
            color: "#8F92A1",
            callback: function (value: string) {
              return value;
            },
          },
        },
      },
    },
  },
  {
    svg: `<svg
width="89"
height="89"
viewBox="0 0 89 89"
fill="none"
xmlns="http://www.w3.org/2000/svg"
>
<path
  d="M0.5 10C0.5 4.75329 4.75329 0.5 10 0.5H79C84.2467 0.5 88.5 4.75329 88.5 10V79C88.5 84.2467 84.2467 88.5 79 88.5H10C4.75329 88.5 0.5 84.2467 0.5 79V10Z"
  stroke="#E2E2EA"
/>
<path d="M17.5 17L17.5 72" stroke="#8F92A1" />
<line x1="72" y1="72" x2="17" y2="72" stroke="#8F92A1" />
<circle cx="27" cy="62" r="2" fill="#DC6041" />
<circle cx="33" cy="51" r="2" fill="#DC6041" />
<circle cx="45" cy="55" r="2" fill="#DC6041" />
<circle cx="50" cy="42" r="2" fill="#DC6041" />
<circle cx="59" cy="33" r="2" fill="#DC6041" />
<circle cx="65" cy="22" r="2" fill="#DC6041" />
</svg>`,

    backgroundColor1: "#EEAC4B",
    backgroundColor2: "#BB5935",
    chart: "line",
    data: {
      labels: ["1 Oct", "8 Oct", "15 Oct", "20 Oct", "24 Oct", "28 Oct"],
      datasets: [
        {
          id: 1,
          label: "",
          type: "line",
          position: "bottom",
          data: [900, 1100, 100, 1400, 1800, 1550],
          backgroundColor: "#EEAC4B",
          borderWidth: 0,
          borderColor: "#fff",
        },
        {
          id: 2,
          label: "",
          type: "line",
          position: "bottom",
          data: [1400, 1100, 700, 700, 1400, 1450],
          backgroundColor: "#BB5935",
          borderWidth: 0,
          borderColor: "#fff",
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          display: true,
          grid: {
            display: false,
          },
          ticks: {
            color: "#8F92A1",
          },
        },

        y: {
          display: true,
          grid: {
            display: true,
            zeroLineColor: "transparent",
            drawBorder: false,
            borderDash: [3, 3],
          },
          ticks: {
            color: "#8F92A1",
            callback: function (value: string) {
              return value;
            },
          },
        },
      },
    },
  },
  {
    svg: `<svg
width="89"
height="89"
viewBox="0 0 89 89"
fill="none"
xmlns="http://www.w3.org/2000/svg"
>
<path
  d="M0.5 10C0.5 4.75329 4.75329 0.5 10 0.5H79C84.2467 0.5 88.5 4.75329 88.5 10V79C88.5 84.2467 84.2467 88.5 79 88.5H10C4.75329 88.5 0.5 84.2467 0.5 79V10Z"
  stroke="#E2E2EA"
/>
<rect x="24" y="56" width="7" height="16" fill="#E58645" />
<rect x="36" y="46" width="7" height="26" fill="#E58645" />
<rect x="48" y="61" width="7" height="11" fill="#E58645" />
<rect x="60" y="36" width="7" height="36" fill="#E58645" />
<path d="M18.5 17L18.5 72" stroke="#8F92A1" />
<line x1="73" y1="72" x2="18" y2="72" stroke="#8F92A1" />
<path
  d="M27 47L39.5 33L51.5 50.5L63.5 20.5"
  stroke="#BB5935"
/>
</svg>`,

    backgroundColor1: "#EEAC4B",
    backgroundColor2: "#BB5935",
    chart: "mixed",
    data: {
      labels: ["1 Oct", "8 Oct", "15 Oct", "20 Oct", "24 Oct", "28 Oct"],
      datasets: [
        {
          id: 1,
          label: "",
          type: "line",
          data: [900, 1100, 100, 1400, 1800, 1550],
          pointRadius: 0,
          backgroundColor: "#EEAC4B",
          borderWidth: 3,
          borderColor: "#EEAC4B",
        },
        {
          id: 2,
          label: "",
          type: "bar",
          data: [1400, 1100, 700, 700, 1400, 1450],
          pointRadius: 0,
          backgroundColor: "#BB5935",
          borderWidth: 3,
          borderColor: "#BB5935",
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          display: true,
          grid: {
            display: false,
          },
          ticks: {
            color: "#8F92A1",
          },
        },

        y: {
          display: true,
          grid: {
            display: true,
            zeroLineColor: "transparent",
            drawBorder: false,
            borderDash: [3, 3],
          },
          ticks: {
            color: "#8F92A1",
            callback: function (value: string) {
              return value;
            },
          },
        },
      },
    },
  },
];
