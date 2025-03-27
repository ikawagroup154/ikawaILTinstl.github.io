        // Updated outlet data from the chart
        const outletData = {
            "Sushi King Berjaya Times Square, KL": { address: "05-106A, 5th Floor, No.1, Jalan Imbi, 55100 Kuala Lumpur.", installationDate: "2015-01-29", initialDate: "2018-08-01", equipmentQty: 1, iltModel: "IK-DIS45", glueboardsPerMonth: 2, rentalRate: "RM65.00", agreementDate: "2018-08-01", uvTubeChangeDate: "2026-08-01", discontinuedDate: "N/A" },
            "Sushi King Melawati Mall, Wangsamaju": { address: "LG-26, Melawati Mall, 355, Jalan Bandar Melawati, Pusat Bandar Melawati, 53100, Kuala Lumpur.", installationDate: "2019-05-10", initialDate: "2019-06-01", equipmentQty: 2, iltModel: "IK-XEN18", glueboardsPerMonth: 10, rentalRate: "RM110.00", agreementDate: "2019-06-01", uvTubeChangeDate: "2025-06-01", discontinuedDate: "N/A" },
            "Sushi King Setia City mall, Setia Alam": { address: "LG-22, Setia City Mall, No.7, Persiaran Dagang, Bandar Setia Alam, Seksyen U13, 40170 Shah Alam, Selangor", installationDate: "2013-01-08", initialDate: "2018-08-01", equipmentQty: 2, iltModel: "IK-XEN18", glueboardsPerMonth: 10, rentalRate: "RM110.00", agreementDate: "2018-08-01", uvTubeChangeDate: "2026-08-01", discontinuedDate: "N/A" },
            "Sushi King All Season Place, Penang": { address: "Lot No. L1-20, Level 1, 6H-1-03, Lebuhraya Thean Teik, 11500 Ayer Item, Pulau Pinang.", installationDate: "2015-06-02", initialDate: "2018-08-01", equipmentQty: 2, iltModel: "IK-TAC700", glueboardsPerMonth: 8, rentalRate: "RM120.00", agreementDate: "2018-08-01", uvTubeChangeDate: "2026-08-01", discontinuedDate: "N/A" },
            "Sushi King Tropicana Garden, PJ": { address: "Lot CC-36, Concourse Floor, Tropicana Gardens Mall, No: 2A, Persiaran Surian, Tropicana Indah, 47819, Petaling Jaya, Selangor Darul Ehsan", installationDate: "2020-03-02", initialDate: "2020-03-02", equipmentQty: 1, iltModel: "IK-XEN18", glueboardsPerMonth: 5, rentalRate: "RM55.00", agreementDate: "2021-03-01", uvTubeChangeDate: "2026-03-02", discontinuedDate: "N/A" },
            "Sushi King SACC, Shah Alam": { address: "Lot GF-25 Ground Floor, SACC Mall, Jalan Perbandaran, 14, 9, Seksyen 14, 40000 Shah Alam, Selangor", installationDate: "2017-04-01", initialDate: "2017-04-01", equipmentQty: 1, iltModel: "IK-DIS45", glueboardsPerMonth: 2, rentalRate: "MYR 65.00", agreementDate: "2018-08-01", uvTubeChangeDate: "2023-04-01", discontinuedDate: "2025-03-30" },
            "Sushi King SOGO, KL": { address: "Level 5 190, Jalan Tuanku Abdul Rahman, City Centre 50100 Kuala Lumpur", installationDate: "2021-04-30", initialDate: "2022-05-01", equipmentQty: 1, iltModel: "IK-XEN18", glueboardsPerMonth: 5, rentalRate: "MYR 55.00", agreementDate: "2020-10-01", uvTubeChangeDate: "2026-05-01", discontinuedDate: "N/A" },
            "Sushi King KL Festival, KL": { address: "Lot G-33, Ground Floor, KL Festival City, 67 Jalan Taman Ibu Kota, Taman Danau Kota, Setapak, 53300 Kuala Lumpur.", installationDate: "2022-08-01", initialDate: "2022-08-01", equipmentQty: 3, iltModel: "IK-XEN18", glueboardsPerMonth: 15, rentalRate: "MYR 165.00", agreementDate: "2019-08-01", uvTubeChangeDate: "2026-08-01", discontinuedDate: "N/A" },
            "Sushi King Mitsui Klia": { address: "Lot 63, First Floor, Persiaran Komersial, 64000 Klia Sepang", installationDate: "2022-01-17", initialDate: "2022-02-01", equipmentQty: 1, iltModel: "IK-XEN18", glueboardsPerMonth: 5, rentalRate: "MYR 55.00", agreementDate: "2020-06-01", uvTubeChangeDate: "2026-02-01", discontinuedDate: "N/A" },
            "Sushi King Taman Equine": { address: "Lot LG-06, Lower Ground Floor Bandar Putra Permai 43300 Seri Kembangan Selangor", installationDate: "2020-02-28", initialDate: "2020-03-01", equipmentQty: 2, iltModel: "IK-XEN18", glueboardsPerMonth: 10, rentalRate: "MYR 110.00", agreementDate: "2020-05-12", uvTubeChangeDate: "2026-03-01", discontinuedDate: "N/A" },
            "Sushi King Lotus Kepong": { address: "Lot F8, First Floor, Tesco Kepong Village Mall, No.3, Jalan 7A/62A, Bandar Menjalara, 52200 KL", installationDate: "2019-08-30", initialDate: "2019-09-01", equipmentQty: 1, iltModel: "IK-XEN18", glueboardsPerMonth: 5, rentalRate: "MYR 55.00", agreementDate: "2019-09-01", uvTubeChangeDate: "2025-09-01", discontinuedDate: "N/A" },
            "Sushi King AEON Maluri": { address: "S02, Second Floor, AEON Taman Maluri Shopping Centre, No. 52 Jalan Jejaka, Taman Maluri, Cheras, 55100, Kuala Lumpur", installationDate: "2019-06-25", initialDate: "2019-07-01", equipmentQty: 1, iltModel: "IK-XEN18", glueboardsPerMonth: 5, rentalRate: "MYR 55.00", agreementDate: "2019-09-01", uvTubeChangeDate: "2025-07-01", discontinuedDate: "N/A" },
            "Sushi King AEON Rawang": { address: "Lot G45, Ground Floor, AEON Rawang Shopping Centre, No.1 Persiaran Anggun, Taman Anggun, Kota Emerald, 48000 Rawang, Selangor.", installationDate: "2019-08-29", initialDate: "2019-09-01", equipmentQty: 1, iltModel: "IK-XEN18", glueboardsPerMonth: 5, rentalRate: "MYR 55.00", agreementDate: "2019-09-01", uvTubeChangeDate: "2025-09-01", discontinuedDate: "N/A" },
            "Sushi King Kiosk Petronas USJ20": { address: "Petronas Station, Lot 49946, Persiaran Kewajipan, USJ 20, 47630 Subang Jaya Selangor", installationDate: "2021-11-15", initialDate: "2021-12-01", equipmentQty: 1, iltModel: "IK-XEN18", glueboardsPerMonth: 5, rentalRate: "MYR 55.00", agreementDate: "2022-06-17", uvTubeChangeDate: "2025-12-01", discontinuedDate: "N/A" },
            "Sushi King Eco Grandeur": { address: "NO.2A &6, Ruang Niaga Eco Grandeur, Persiaran Makhtar Dahari, Bandar Puncak Alam, 42300 Selangor", installationDate: "2021-12-29", initialDate: "2022-01-01", equipmentQty: 3, iltModel: "IK-XEN18", glueboardsPerMonth: 15, rentalRate: "MYR 165.00", agreementDate: "2022-06-17", uvTubeChangeDate: "2026-01-01", discontinuedDate: "N/A" },
            "Sushi King Pavilion Bukit Jalil": { address: "Lot 1.05.00, Level 1, Pavilion Bukit Jalil, Pusat Bandar, 2, Persiaran Jalil Utama, Bukit Jalil, 57000 Kuala Lumpur", installationDate: "2021-11-30", initialDate: "2021-12-01", equipmentQty: 2, iltModel: "IK-XEN18", glueboardsPerMonth: 10, rentalRate: "MYR 110.00", agreementDate: "2022-06-17", uvTubeChangeDate: "2026-06-17", discontinuedDate: "N/A" },
            "Sushi King Mydin Tunjung Kota Bharu": { address: "Sushi King, Lot G-111, Mydin Tunjong, 16010 Kota Bharu", installationDate: "2022-04-18", initialDate: "2022-05-01", equipmentQty: 3, iltModel: "IK-XEN18", glueboardsPerMonth: 15, rentalRate: "MYR 165.00", agreementDate: "2022-06-17", uvTubeChangeDate: "2026-05-01", discontinuedDate: "N/A" },
            "Sushi King Mitsui Lalaport BBCC": { address: "LG1-10, Mitsui Shopping Park LaLaport Kuala Lumpur, No. 2, Jalan Hang Tuah, 55100 Kuala Lumpur", installationDate: "2022-01-17", initialDate: "2022-04-01", equipmentQty: 2, iltModel: "IK-XEN18", glueboardsPerMonth: 10, rentalRate: "MYR 110.00", agreementDate: "2022-06-17", uvTubeChangeDate: "2026-04-01", discontinuedDate: "N/A" },
            "Sushi King Selayang Mall": { address: "G.26A & G 26B Ground Floor Selayang Mall, Jalan SU9 Taman Selayang Utama 68100 Batu Caves Selangor", installationDate: "2022-05-18", initialDate: "2022-06-01", equipmentQty: 2, iltModel: "IK-XEN18", glueboardsPerMonth: 10, rentalRate: "MYR 110.00", agreementDate: "2022-06-17", uvTubeChangeDate: "2026-06-17", discontinuedDate: "N/A" },
            "Sushi King Eco Hill Semenyih": { address: "L1-13, Setia Eco Hill Welcome Centre, Club 360 No.1 Persiaran Eco Hill Barat, Setia Eco Hill 43500 Semenyih Selangor", installationDate: "2022-08-25", initialDate: "2022-09-01", equipmentQty: 3, iltModel: "IK-XEN18", glueboardsPerMonth: 15, rentalRate: "MYR 165.00", agreementDate: "2022-09-01", uvTubeChangeDate: "2026-09-01", discontinuedDate: "N/A" },
            "Sushi King Aeon Seremban 2": { address: "AEON Mall Seremban 2, Lot G40, Ground Floor, No. 112 Persiaran S2 B1 70300 Serembam, Negeri Sembilan", installationDate: "2022-08-25", initialDate: "2022-09-01", equipmentQty: 2, iltModel: "IK-XEN18", glueboardsPerMonth: 10, rentalRate: "MYR 110.00", agreementDate: "2022-09-01", uvTubeChangeDate: "2026-09-01", discontinuedDate: "N/A" },
            "Sushi King NSK Kuchai Lama": { address: "Unit U14 Basement 2, No. 2 Jalan 1/27 Off Jalan Kuchai Lama, 58200 KL", installationDate: "2022-06-13", initialDate: "2022-07-01", equipmentQty: 1, iltModel: "IK-XEN18", glueboardsPerMonth: 5, rentalRate: "MYR 55.00", agreementDate: "2022-06-17", uvTubeChangeDate: "2026-06-17", discontinuedDate: "N/A" },
            "Sushi King IOI City Mall": { address: "Lot No. LG-K213 Lower Ground Floor IOI City Mall 2 Lebuh IRC 62502 Putrajaya Selangor", installationDate: "2022-12-01", initialDate: "2022-12-01", equipmentQty: 1, iltModel: "IK-XEN18", glueboardsPerMonth: 5, rentalRate: "MYR 55.00", agreementDate: "2022-12-01", uvTubeChangeDate: "2026-12-01", discontinuedDate: "N/A" },
            "Sushi King Kiosk IOI City Mall": { address: "LG-K213, Lower Ground Floor, IOI City Mall 2, Lebuh IRC, 62502 Putrajaya, Selangor.", installationDate: "2022-10-01", initialDate: "2022-10-01", equipmentQty: "1", iltModel: "IK-XEN18 (B)", glueboardsPerMonth: 5, rentalRate: "MYR 55.00", agreementDate: "2022-10-01", uvTubeChangeDate: "", discontinuedDate: "2024-01-31" },
            "Sushi King Mydin Subang": { address: "Lot GF-03 & 05, Mydin Subang Jaya Hypermarket, Lot 675 & 676, Persiaran Subang Permai, Taman Perindustrian USJ 1, 47500, Subang Jaya, Selangor.", installationDate: "2023-04-10", initialDate: "2023-05-01", equipmentQty: 2, iltModel: "IK-XEN18", glueboardsPerMonth: 10, rentalRate: "MYR 110.00", agreementDate: "2023-05-01", uvTubeChangeDate: "2025-05-01", discontinuedDate: "N/A" },
            "Sushi King Kiosk Shell Mint Hotel": { address: "Lot 14896, PT13398, Sungai Besi, Lebuhraya KL-Seremban, 57000 Kuala Lumpur", installationDate: "2022-11-07", initialDate: "2022-12-01", equipmentQty: 1, iltModel: "IK-XEN18", glueboardsPerMonth: 5, rentalRate: "MYR 55.00", agreementDate: "2022-12-01", uvTubeChangeDate: "2026-12-01", discontinuedDate: "N/A" }
        };

        let submissions = JSON.parse(localStorage.getItem('iltSubmissions')) || [];

        function updateFields() {
            const outletName = document.getElementById('outletName').value;
            const data = outletData[outletName] || {};
            document.getElementById('address').value = data.address || '';
            document.getElementById('installationDate').value = data.installationDate || '';
            document.getElementById('initialDate').value = data.initialDate || '';
            document.getElementById('equipmentQty').value = data.equipmentQty || '';
            document.getElementById('iltModel').value = data.iltModel || '';
            document.getElementById('agreementDate').value = data.agreementDate || '';
            document.getElementById('rentalRate').value = data.rentalRate || '';
            document.getElementById('glueboardsPerMonth').value = data.glueboardsPerMonth || '';
            document.getElementById('uvTubeChangeDate').value = data.uvTubeChangeDate || '';

            const isDiscontinued = data.discontinuedDate && data.discontinuedDate !== 'N/A';
            const submitButton = document.getElementById('submitButton');
            const glueboardsInput = document.getElementById('glueboardsPerMonth');
            const uvTubeInput = document.getElementById('uvTubeChangeDate');
            const discontinuedInput = document.getElementById('discontinuedDate');
            const contractStatus = document.getElementById('contractStatus');

            if (isDiscontinued) {
                contractStatus.textContent = 'End of Contract';
                submitButton.disabled = true;
                glueboardsInput.disabled = true;
                uvTubeInput.disabled = true;
                discontinuedInput.disabled = true;
            } else {
                contractStatus.textContent = '';
                submitButton.disabled = false;
                glueboardsInput.disabled = false;
                uvTubeInput.disabled = false;
                discontinuedInput.disabled = false;
            }
        }

        function submitForm(event) {
            event.preventDefault();

            const submission = {
                id: Date.now(),
                outletName: document.getElementById('outletName').value,
                address: document.getElementById('address').value,
                installationDate: document.getElementById('installationDate').value,
                initialDate: document.getElementById('initialDate').value,
                equipmentQty: document.getElementById('equipmentQty').value,
                iltModel: document.getElementById('iltModel').value,
                agreementDate: document.getElementById('agreementDate').value,
                rentalRate: document.getElementById('rentalRate').value,
                glueboardsPerMonth: document.getElementById('glueboardsPerMonth').value,
                uvTubeChangeDate: document.getElementById('uvTubeChangeDate').value,
                discontinuedDate: document.getElementById('discontinuedDate').value || 'N/A'
            };

            if (!submission.outletName) {
                alert('Please select an Outlet Name.');
                return;
            }

            submissions.push(submission);
            localStorage.setItem('iltSubmissions', JSON.stringify(submissions));
            document.getElementById('iltForm').reset();
            renderSubmissions();
        }

        function renderSubmissions() {
            const submissionList = document.getElementById('submissionList');
            submissionList.innerHTML = '<h2>Recent Submissions</h2>';

            submissions.forEach(sub => {
                const subDiv = document.createElement('div');
                subDiv.className = 'submission-item';
                subDiv.innerHTML = `
                    <strong>Outlet:</strong> ${sub.outletName}<br>
                    <strong>Address:</strong> ${sub.address}<br>
                    <strong>Installation Date:</strong> ${sub.installationDate}<br>
                    <strong>Initial Date:</strong> ${sub.initialDate}<br>
                    <strong>Equipment Qty:</strong> ${sub.equipmentQty} UNIT${sub.equipmentQty > 1 ? 'S' : ''}<br>
                    <strong>ILT Model:</strong> ${sub.iltModel}<br>
                    <strong>Agreement Date:</strong> ${sub.agreementDate}<br>
                    <strong>Rental Rate:</strong> ${sub.rentalRate}<br>
                    <strong>Glueboards/Month:</strong> ${sub.glueboardsPerMonth}<br>
                    <strong>UV Tube Change:</strong> ${sub.uvTubeChangeDate}<br>
                    <strong>Discontinued:</strong> ${sub.discontinuedDate}
                `;
                submissionList.appendChild(subDiv);
            });
        }

        // Initial render
        renderSubmissions();