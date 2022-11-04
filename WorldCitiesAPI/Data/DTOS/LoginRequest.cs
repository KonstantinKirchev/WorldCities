namespace WorldCitiesAPI.Data.DTOS
{
    using System.ComponentModel.DataAnnotations;

    public class LoginRequest
    {
        [Required(ErrorMessage = "Email is required.")]
        public string Email { get; set; } = null!;

        [Required(ErrorMessage = "Password is required.")]
        public string Password { get; set; } = null!;
    }
}
