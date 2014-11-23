using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(SDRWebsiteAngularJS.Startup))]
namespace SDRWebsiteAngularJS
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
