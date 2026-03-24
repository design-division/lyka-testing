document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('referralForm');
  const input = document.getElementById('referralCode');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const code = input.value.trim();

    if (!code) {
      alert('Please enter a referral code.');
      return;
    }

    const url = `https://lyka.com.au/get-started?cp=${encodeURIComponent(code)}`;
    window.location.href = url;
  });
});
