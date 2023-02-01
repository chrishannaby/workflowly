const ipAllowList = Deno.env.get("IP_ALLOW_LIST") || "98.38.232.100";

export default async (_, context) => {
  const ip = context.ip;
  const allowedIp = ipAllowList.includes(ip);

  if (allowedIp) {
    context.log(`Access Granted - IP Address ${ip} is allowed`);
    return context.next();
  } else {
    const error = `Access Denied - IP Address ${ip} is not in allow list`;
    context.log(error);
    return new Response(errors, {
      headers: { "content-type": "text/html" },
      status: 451,
    });
  }
};
