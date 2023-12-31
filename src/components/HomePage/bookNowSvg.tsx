import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

export default function BookNowSvg() {
    const [scrollProgress, setScrollProgress] = useState(0);
    const controls = useAnimation();

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const maxScroll = 80;
        const progress = Math.min(scrollY / maxScroll, 1);
        setScrollProgress(progress);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        void controls.start({
            pathLength: scrollProgress,
            opacity: scrollProgress,
        });
    }, [scrollProgress, controls]);

    return (
        <svg
            width="835"
            height="767"
            viewBox="0 0 835 767"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-2/3"
        >
            <motion.path
                d="M87 189C82.8712 206.4 66.2154 214.071 49.7778 211.889C35.3074 209.968 17.6195 200.39 8.55555 189C2.08323 180.867 1.22284 168.96 2.27778 159.056C5.77133 126.255 35.2312 101.847 64 90.1667C94.2047 77.9031 131.434 81.9293 162.528 88.3889C178.546 91.7166 193.983 97.1507 209.861 101C234.631 107.005 259.987 110.405 284.833 116.139C351.558 131.537 416.317 154.698 483.444 168.556C556.36 183.608 632.824 193.222 705.5 172.333C734.3 164.056 764.885 150.37 788.056 131.056C808.46 114.048 831.031 88.2886 832.639 60.4445C833.615 43.5479 824.7 30.41 812.361 19.4722C799.002 7.62979 780.514 3.94142 763.25 2.11113C739.096 -0.449578 714.816 6.78747 693.111 16.9722C674.974 25.4831 661.223 38.8095 651.917 56.5833C637.437 84.2359 650.742 114.742 673.583 132.583C708.551 159.898 746.81 181.306 776.389 215.278C804.329 247.368 826.644 282.479 829.556 325.944C831.945 361.617 823.245 395.169 802.056 423.917C783.211 449.483 761.965 472.338 737.083 492.139C726.504 500.558 716.056 509.102 706.194 518.361C704.304 520.136 698.368 527.526 700 521"
                stroke="#DFA9FF"
                strokeWidth="10"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={controls}
            />
            <motion.path
                d="M724 427.5C713.534 444.356 705.745 462.782 697 480.556C690.31 494.153 682.805 507.118 675.333 520.278C670.857 528.162 660.571 542.334 661.861 551.917C662.554 557.064 675.905 551.636 678.167 551C705.122 543.419 733.701 538.463 761.389 545.611C764.32 546.368 772.594 550.18 769.722 549.222C767.405 548.45 766.24 545.861 765 544"
                stroke="#DFA9FF"
                strokeWidth="10"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={controls}
            />
            <motion.path
                d="M196.5 205.5C196 209.081 191.997 210.997 189.056 212.5C174.268 220.056 159.725 217.829 146.583 207.972C124.604 191.488 102.653 157.151 124.667 131.667C131.698 123.527 141.419 119.278 151.833 117.444C160.377 115.94 169.246 115.621 177.889 115.444C191.313 115.17 207.067 114.095 220.056 118.389C259.139 131.31 266.006 175.465 251.167 209.583C237.024 242.099 203.609 255.771 173.111 268.167C147.938 278.398 126.535 296.615 113.694 320.806C97.778 350.791 98.4309 388.097 111.278 419.278C116.462 431.861 123.784 443.525 131.944 454.361C135.815 459.5 133.153 455.48 131.5 453"
                stroke="#DFA9FF"
                strokeWidth="10"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={controls}
            />
            <motion.path
                d="M90.5 461.5C107.566 477.336 128.322 488.898 149.667 497.917C155.252 500.276 164.412 506.087 170.722 505.778C174.923 505.572 166.941 485.053 166.75 484.389C159.857 460.37 157.661 435.999 154.111 411.389C152.753 401.977 151.371 407.623 154.5 409.5"
                stroke="#DFA9FF"
                strokeWidth="10"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={controls}
            />
            <motion.path
                d="M121 594.5C115.908 605.582 121.334 617.978 127.722 627.5C136.806 641.039 143.141 652.502 146.556 668.833C146.821 670.102 149.109 678.882 145.472 675.972C142.911 673.924 140.42 671.444 138.5 668.778C133.15 661.347 131.192 651.584 127.278 643.389C122.469 633.322 113.653 623.429 115.972 611.528C119.435 593.761 137.856 577.632 151.778 567.972C166.051 558.068 185.94 555.331 196.167 572.222C214.348 602.25 186.358 628.35 161.194 640.639C158.57 641.92 138.939 649.289 146.111 640C150.912 633.783 157.415 628.851 163.556 624.056C174.967 615.145 186.614 606.523 200.722 602.445C218.587 597.28 240.733 596.752 251.556 614.722C263.197 634.053 248.972 661.776 234.444 675.556C220.364 688.911 202.604 690.109 184.167 690.195C178.143 690.223 162.073 692.216 157.5 686.5"
                stroke="#DFA9FF"
                strokeWidth="10"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={controls}
            />
            <motion.path
                d="M293 576.5C288.369 570.558 284.195 570.974 279.444 577.417C271.771 587.823 270.947 602.883 272.778 615.139C277.093 644.029 310.997 655.026 334.083 638.583C353.886 624.479 352.414 597.49 333.444 583.167C323.32 575.522 299.277 573.734 288 580.5"
                stroke="#DFA9FF"
                strokeWidth="10"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={controls}
            />
            <motion.path
                d="M391 541.5C376.135 538.132 359.436 542.775 354.389 558.833C347.786 579.844 351.228 620.351 378.722 625.278C404.466 629.891 435.665 589.692 421.5 566.194C412.703 551.602 394.941 562.281 383.5 555"
                stroke="#DFA9FF"
                strokeWidth="10"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={controls}
            />
            <motion.path
                d="M406.5 473.5C415.32 500.894 426.668 527.775 439.306 553.611C444.318 563.858 449.823 573.842 456.333 583.222C459.527 587.823 462.606 592.553 467.5 595"
                stroke="#DFA9FF"
                strokeWidth="10"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={controls}
            />
            <motion.path
                d="M450 468C446.808 481.087 443.935 494.25 440.722 507.333C438.937 514.603 437.024 521.839 435.25 529.111C433.951 534.436 430.121 543.674 432.667 549.222C434.782 553.833 443.393 549.057 445.667 548.167C458.151 543.28 470.258 537.518 482.917 533.056C495.924 528.471 508.378 527.176 522 527.5"
                stroke="#DFA9FF"
                strokeWidth="10"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={controls}
            />
            <motion.path
                d="M390 737.5C383.698 723.043 380.486 707.275 376.611 692.056C373.063 678.121 367.83 665.108 363.5 651.5C362.753 649.153 366.454 655.443 367.889 657.445C371.203 662.068 374.523 666.667 378.111 671.083C390.625 686.485 404.307 701.845 421.167 712.611C429.287 717.797 443.743 726.192 452.389 717.222C456.171 713.298 455.826 706.303 455.778 701.333C455.656 688.811 453.309 675.852 449.694 663.889C446.019 651.722 439.344 639.725 431.25 629.917C430.08 628.499 419.908 620.403 425.5 622.5"
                stroke="#DFA9FF"
                strokeWidth="10"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={controls}
            />
            <motion.path
                d="M497.5 637C485.991 636.592 475.405 638.446 468.333 648.833C460.956 659.67 462.058 673.761 466.389 685.444C474.227 706.588 490.05 717.768 512.722 709.722C532.902 702.561 542.894 677.249 536.167 657.556C530.418 640.727 515.298 632.91 501 624.5"
                stroke="#DFA9FF"
                strokeWidth="10"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={controls}
            />
            <motion.path
                d="M510 622C512.258 630.782 516.802 636.959 522.556 644.083C534.454 658.817 548.038 672.728 562.944 684.444C566.673 687.375 591.919 703.892 589.833 687.889C587.451 669.609 575.646 652.357 567.361 636.361C564.835 631.484 561.028 625.791 559.639 620.361C559.445 619.604 568.147 629.589 568.167 629.611C575.714 638.332 583.832 646.497 592.5 654.111C599.953 660.658 610.226 671.209 620.667 673C634.567 675.384 620.988 653.152 618.944 649.361C608.917 630.76 598.381 612.407 588 594C587.216 592.61 580.467 583.17 582 581.111C582.925 579.868 587.453 584.11 588 584.5"
                stroke="#DFA9FF"
                strokeWidth="10"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={controls}
            />
            <motion.path
                d="M562.5 428.5C567.408 416.881 574.824 406.506 582.111 396.278C586.579 390.006 591.139 383.797 596.083 377.889C599.073 374.317 604.21 366.602 609.25 365.444C616.935 363.679 608.486 385.885 607.972 387.222C598.999 410.57 588.364 433.332 578.667 456.389C573.51 468.65 568.211 480.958 564.222 493.667C563.635 495.536 562.729 503.565 563.722 497.75C564.45 493.489 565.26 493.325 561.889 492.167C557.659 490.713 554.048 487.125 550.611 484.417C541.266 477.054 531.99 470.837 524.389 461.444C515.575 450.553 509.248 437.566 504.5 424.444C501.266 415.507 493.187 393.677 500.333 384.917C505.22 378.927 517.939 385.73 523.139 388.056C534.61 393.185 545.113 400.85 553.389 410.333C555.003 412.183 568.649 431.536 558.5 426"
                stroke="#DFA9FF"
                strokeWidth="10"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={controls}
            />
            <motion.path
                d="M283 430C285.951 427.396 286.836 417.92 288.389 414.389C293.45 402.883 300.589 391.41 310.389 383.333C313.243 380.981 318.075 377.289 322.083 378.028C326.643 378.868 325.897 387.273 325.667 390.278C324.349 407.464 317.934 424.053 314.306 440.806C310.188 459.818 307.147 479.358 306.611 498.833C306.516 502.28 306.185 506.171 307.111 509.556C307.381 510.543 308.651 512.642 308.944 510.444C309.515 506.164 307.403 505.5 303.972 505.5C300.759 505.5 298.097 504.422 295 503.528C285.511 500.786 275.744 498.821 266.5 495.278C253.943 490.465 240.389 480.977 235.028 468.222C231.18 459.066 229.178 444.743 235.389 435.944C243.648 424.243 268.498 420.575 279.278 431C281.486 433.135 286.971 448.507 284 439"
                stroke="#DFA9FF"
                strokeWidth="10"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={controls}
            />
            <motion.path
                d="M275.5 704.5C271.808 700.316 279.445 684.933 281.083 680.972C282.558 677.408 287.89 661.261 293.75 661.639C301.112 662.114 303.219 687.942 303.639 693.056C305.04 710.119 304.569 727.408 303.472 744.472C303.139 749.662 302.775 754.854 302 760C301.759 761.602 300.204 765.805 301.5 764.833C302.942 763.752 303.847 759.967 304.5 758.333C305.205 756.572 298.527 757.21 296.056 756.889C289.566 756.047 283.614 757.15 277.139 757.444C267.1 757.901 256.531 755.9 247.333 751.889C229.65 744.177 223.089 729.122 236.583 713.861C242.698 706.946 261.165 692.604 271.278 698.222C275.188 700.395 275.112 705.537 275.389 709.444C275.544 711.641 274.894 713.324 273.5 711"
                stroke="#DFA9FF"
                strokeWidth="10"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={controls}
            />
        </svg>
    );
}
