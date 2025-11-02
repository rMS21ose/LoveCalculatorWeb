from flask import Flask, render_template, request, jsonify, url_for

app = Flask(__name__)


def lovecalculator(name1: str, name2: str) -> int:
    """Return combined love score as integer (e.g. 53)."""
    combined_name = (name1 + name2).lower()
    true_score = 0
    love_score = 0

    for letter in "amore":
        true_score += combined_name.count(letter)

    for letter in "love":
        love_score += combined_name.count(letter)

    # combine as string (not numeric addition) e.g., true=5, love=3 -> 53
    love_total_score = int(str(true_score) + str(love_score))
    return love_total_score


def get_message(score: int) -> str:
    """Return the message based on score rules provided."""
    if score >= 80:
        return "You are with the right person!"
    if score > 50:
        return "Go on dates"
    if score == 50:
        return "That's not bad!!!"
    return "You have a lot of communication to do!"


@app.route("/", methods=["GET"])
def index():
    # initial page: no score yet
    return render_template("index.html")


@app.route("/calculate", methods=["POST"])
def calculate():
    data = request.get_json()
    name1 = data.get("name1", "") or ""
    name2 = data.get("name2", "") or ""

    score = lovecalculator(name1, name2)
    message = get_message(score)

    return jsonify({"score": score, "message": message})


if __name__ == "__main__":
    # debug=True for development; remove or set False for production
    app.run(debug=True)
