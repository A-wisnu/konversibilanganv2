document.addEventListener('DOMContentLoaded', () => {
    const inputNumber = document.getElementById('inputNumber');
    const fromBase = document.getElementById('fromBase');
    const binaryResult = document.getElementById('binaryResult');
    const octalResult = document.getElementById('octalResult');
    const decimalResult = document.getElementById('decimalResult');
    const hexResult = document.getElementById('hexResult');
    
    // Set focus pada input saat halaman dimuat
    inputNumber.focus();

    // Fungsi untuk memvalidasi input berdasarkan basis
    function validateInput(input, base) {
        const regex = {
            2: /^[01]+$/,
            8: /^[0-7]+$/,
            10: /^[0-9]+$/,
            16: /^[0-9A-Fa-f]+$/
        };
        return regex[base].test(input);
    }

    // Fungsi untuk mengkonversi bilangan
    function convertNumber(number, fromBase) {
        try {
            // Konversi ke desimal terlebih dahulu
            const decimal = parseInt(number, fromBase);
            
            if (isNaN(decimal)) {
                throw new Error('Input tidak valid');
            }

            // Konversi ke basis lain
            return {
                binary: decimal.toString(2),
                octal: decimal.toString(8),
                decimal: decimal.toString(10),
                hex: decimal.toString(16).toUpperCase()
            };
        } catch (error) {
            return null;
        }
    }

    // Fungsi untuk memperbarui hasil
    function updateResults() {
        const input = inputNumber.value.trim();
        const base = parseInt(fromBase.value);

        // Reset hasil jika input kosong
        if (!input) {
            binaryResult.textContent = '-';
            octalResult.textContent = '-';
            decimalResult.textContent = '-';
            hexResult.textContent = '-';
            return;
        }

        // Validasi input
        if (!validateInput(input, base)) {
            binaryResult.textContent = 'Error';
            octalResult.textContent = 'Error';
            decimalResult.textContent = 'Error';
            hexResult.textContent = 'Error';
            return;
        }

        // Konversi dan tampilkan hasil
        const results = convertNumber(input, base);
        if (results) {
            binaryResult.textContent = results.binary;
            octalResult.textContent = results.octal;
            decimalResult.textContent = results.decimal;
            hexResult.textContent = results.hex;
        } else {
            binaryResult.textContent = 'Error';
            octalResult.textContent = 'Error';
            decimalResult.textContent = 'Error';
            hexResult.textContent = 'Error';
        }
    }

    // Event listeners
    inputNumber.addEventListener('input', updateResults);
    fromBase.addEventListener('change', updateResults);

    // Inisialisasi tampilan awal
    updateResults();
}); 